<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Response;
use Carbon\Carbon;
use DB;
use Log;
    use Auth;

class LaboratorioController extends Controller
{
    public function saveLaboratorio(Request $request){
		$permiso = DB::table('usuario')->join('rol', 'usuario.rol_id','=','rol.id')->join('rol_permiso', 'rol_permiso.rol_id', '=', 'rol.id')
        ->join('permiso', 'rol_permiso.permiso_id', '=', 'permiso.id')->select('permiso.id')->where('permiso.id', '9')
        ->where('usuario.id', Auth::user()->id)->count();

        if($permiso<1){
                return Response::json(array('Success' => 'false'));
                //return redirect()->route('/');
        }

		$nombre = $request->input('nameLaboratorio');
		$direccion = $request->input('descriptionLaboratorio');
		$correo = $request->input('correoLaboratorio');
		$telefonos = $request->input('telefonoLaboratorio');
	
		
		$user_created = Auth::user()->username;
		$estadoM = $request->input('estadoLaboratorio');
	    $date = Carbon::now();
	
		$exists = DB::table('laboratorio')->select('nombre')->where('nombre', $nombre)->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                }


		DB::statement('SET FOREIGN_KEY_CHECKS=0;');
	    $idLab = DB::table('laboratorio')->insertGetId(
	       	array('nombre'=>$nombre, 'direccion'=>$direccion, 'correo'=>$correo,'user_created'=>$user_created,'user_updated'=>$user_created,'estado'=>$estadoM,'created_at'=>$date,'updated_at'=>$date)
	    );
	    
	    
	    foreach ($telefonos as $telefono){
	    		DB::table('telefonoLaboratorio')->insert(
	    			array('laboratorio_id'=>$idLab,'telefono'=>$telefono,'user_created'=>$user_created,'user_updated'=>$user_created)
	    		);
	    };
	    
	    
		return Response::json(array('Success' => 'true'));
    }

	public function updateLaboratorio(Request $request){
		$permiso = DB::table('usuario')->join('rol', 'usuario.rol_id','=','rol.id')->join('rol_permiso', 'rol_permiso.rol_id', '=', 'rol.id')
        ->join('permiso', 'rol_permiso.permiso_id', '=', 'permiso.id')->select('permiso.id')->where('permiso.id', '10')
        ->where('usuario.id', Auth::user()->id)->count();

        if($permiso<1){
                return Response::json(array('Success' => 'false'));
                //return redirect()->route('/');
        }

		$id = $request->input('idLaboratorio');
		$nombre = $request->input('nameLaboratorio');
                $direccion = $request->input('descriptionLaboratorio');
                $correo = $request->input('correoLaboratorio');
                $telefonos = $request->input('telefonoLaboratorio');


                $user_created = Auth::user()->username;
                $estadoM = $request->input('estadoLaboratorio');
            $date = Carbon::now();

                $exists = DB::table('laboratorio')->select('nombre')->where('nombre', $nombre)->whereNotIn('id', array($id))->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                }


                DB::statement('SET FOREIGN_KEY_CHECKS=0;');
                DB::table('laboratorio')->where('id','=', $id)->update(
                array('nombre'=>$nombre, 'direccion'=>$direccion, 'correo'=>$correo,'user_updated'=>$user_created,'estado'=>$estadoM,
'updated_at'=>$date)
            );

	        DB::table('telefonoLaboratorio')->where('laboratorio_id', $id)->delete();
            foreach ($telefonos as $telefono){
                        DB::table('telefonoLaboratorio')->insert(
                                array('laboratorio_id'=>$id,'telefono'=>$telefono,'user_updated'=>$user_created)
                        );
            };


                return Response::json(array('Success' => 'true'));


	}

    public function allLaboratorio(){
	$retVal = DB::table('laboratorio')->where('estado','=',1)->get();
        return Response::json($retVal);
    }
    
    public function allLaboratorioMod(){
	$retVal = DB::table('laboratorio')->get();
        return Response::json($retVal);
    }
}

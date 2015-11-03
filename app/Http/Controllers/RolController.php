<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Response;
use Carbon\Carbon;
use DB;
    use Auth;

class RolController extends Controller
{
   public function saveRol(Request $request){
                        $nombreR = $request->input('nombreRol');
                        $descR = $request->input('descriptionRol');
                        $estadoR = $request->input('estadoRol');
                        $date = Carbon::now();

			$exists = DB::table('rol')->select('nombre')->where('nombre', $nombreR)->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }


						DB::statement('SET FOREIGN_KEY_CHECKS=0;');
                        DB::table('rol')->insert(
                                array('nombre'=>$nombreR, 'descripcion'=>$descR, 'estado'=>$estadoR,
                                                'created_at'=>$date,'updated_at'=>$date)
                        );

                        return Response::json(array('Success' => 'true'));
                }

		public function updateRol(Request $request){
			$id = $request->input('idRol');
			$nombreR = $request->input('nombreRol');
                        $descR = $request->input('descriptionRol');
                        $estadoR = $request->input('estadoRol');
                        $date = Carbon::now();

                        $exists = DB::table('rol')->select('nombre')->where('nombre', $nombreR)->whereNotIn('id', array($id))->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }


                                                DB::statement('SET FOREIGN_KEY_CHECKS=0;');
                        DB::table('rol')->where('id','=', $id)->update(
                                array('nombre'=>$nombreR, 'descripcion'=>$descR, 'estado'=>$estadoR,
                                                'updated_at'=>$date)
                        );

                        return Response::json(array('Success' => 'true'));

		}
	
		public function getPermisosRol(Request $request){
			$id = $request->input('idRol');
			$retVal = DB::table('permiso')->join('rol_permiso', 'permiso.id', '=', 'rol_permiso.permiso_id')->join('rol', 'rol.id', '=',
				'rol_permiso.rol_id')->select('permiso.id')->where('rol.id', $id)->get();
			return json_encode($retVal); 			
		}

                public function allRol(){
                        $retVal = DB::table('rol')->where('estado','=',1)->get();
                        return $retVal;
                }
    
                public function allRolMod(){
                        $retVal = DB::table('rol')->get();
                        return $retVal;
                }

}

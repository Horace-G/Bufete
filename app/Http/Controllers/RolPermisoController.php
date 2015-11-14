<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
    use Auth;

class RolPermisoController extends Controller
{
	public function saveRolPermiso(Request $request){
                        $rol_id = $request->input('rol_id');
                        $permiso_id = $request->input('permiso_id');
	    	 	$date = Carbon::now();


                        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('rol_permiso')->where('rol_id','=',$rol_id)->delete();
        
                foreach ($permiso_id as $permiso){
                        DB::table('rol_permiso')->insert(
                                array('rol_id'=>$rol_id, 'permiso_id'=>$permiso, 'created_at'=>$date,'updated_at'=>$date)
                        );
                };
                        

        return Response::json(array('Success' => 'true'));
                }

     public function allRolPermiso(){
                        $retVal = DB::table('rol_permiso')->get();
                        return Response::json($retVal);
                }
    
        public function allPermisoRol(Request $request){
            $rol_id = $request->input('idRol');
            $retVal = DB::table('rol_permiso')->where('rol_id','=',$rol_id)->get();
            return Response::json($retVal);
        }
    
    public function getUserPermisos(){
        $permisoUsuario = DB::table('usuario')
            ->join('rol', 'usuario.rol_id','=','rol.id')
            ->join('rol_permiso', 'rol_permiso.rol_id', '=', 'rol.id')
            ->join('permiso', 'rol_permiso.permiso_id', '=', 'permiso.id')
            ->select('permiso.nombre as PermisoNombre','rol_permiso.permiso_id as IdPermiso')
            ->where('usuario.id', Auth::user()->id)->get();
        $allPermiso = DB::table('permiso')->select('id','nombre')->get();
        
        $retVal = array();
        $iteration = 0;
        
        foreach ($allPermiso as $permiso){
            if ($permisoUsuario[$iteration]->IdPermiso == $permiso->id){
                array_add($retVal,$permiso->nombre,true);
                $iteration++;
            }else{
                array_add($retVal,$permiso->nombre,false);
            }
        }
        return json_encode($retVal);
    }


}

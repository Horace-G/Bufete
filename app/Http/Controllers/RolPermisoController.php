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
                        $rol_id = $request->input('rol_idRolPermiso');
                        $permiso_id = $request->input('permiso_idRolPermiso');
	    	 	$date = Carbon::now();


                        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

                        DB::table('rol_permiso')->insert(
                                array('rol_id'=>$rol_id, 'permiso_id'=>$permiso_id, 'created_at'=>$date,'updated_at'=>$date)
                        );

                        return Response::json(array('Success' => 'true'));
                }

                public function allRolPermiso(){
                        $retVal = DB::table('rol_permiso')->get();
                        return Response::json($retVal);
                }


}

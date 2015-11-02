<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
    use Auth;
    //use Auth;

class PermisoController extends Controller
{
	public function savePermiso(Request $request){
                        $descripcionP = $request->input('descripcionPermiso');
                        $estadoP = $request->input('estadoPermiso');
                        $userCreate = Auth::user()->username;
	    	 	$date = Carbon::now();

                        $exists = DB::table('permiso')->select('descripcion')->where('descripcion', $descripcionP)->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }


                        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

                        DB::table('permiso')->insert(
                                array('descripcion'=>$descripcionP, 'estado'=>$estadoP, 'user_created'=>$userCreate, 'user_updated'=>$userCreate, 
				'created_at'=>$date,'updated_at'=>$date)
                        );

                        return Response::json(array('Success' => 'true'));
                }

		public function updatePermiso(Request $request){
			$id = $request->input('idPermiso');

			$descripcionP = $request->input('descripcionPermiso');
                        $estadoP = $request->input('estadoPermiso');
                        $userCreate = Auth::user()->username;
                        $date = Carbon::now();

                        $exists = DB::table('permiso')->select('descripcion')->where('descripcion', $descripcionP)->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }


                        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

                        DB::table('permiso')->where('id', $id)->update(
                                array('descripcion'=>$descripcionP, 'estado'=>$estadoP, 'user_updated'=>$userCreate, 'updated_at'=>$date)
                        );

                        return Response::json(array('Success' => 'true'));

		}

                public function allPermisoMod(){
                        $retVal = DB::table('permiso')->get();
                        return Response::json($retVal);
                }
                
                public function allPermiso(){
			$retVal = DB::table('permiso')->where('estado','=',1)->get();
			return Response::json($retVal);
		}


}

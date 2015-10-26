<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Response;
use Carbon\Carbon;
use DB;

class UsuarioController extends Controller
{

    public function saveUsuario(Request $request){
                        $usernameU = $request->input('usernameUsuario');
                        $passwordU = $request->input('passwordUsuario');
                        $nombreU = $request->input('nombreUsuario');
			$estadoU = $request->input('estadoUsuario');
			$rol_idU = $request->input('rol_idUsuario');
                        $date = Carbon::now();
			
			$exists = DB::table('usuario')->select('nombre')->where('nombre', $usernameU)->count();
                        if ($exists>0){
                                return Respone::json(array('Success' => 'false'));
                        }
			

			DB::statement('SET FOREIGN_KEY_CHECKS=0;');

                        DB::table('usuario')->insert(
                                array('username'=>$usernameU, 'password'=>$passwordU, 'nombre'=>$nombreU, 'estado'=>$estadoU, 'rol_id'=>$rol_idU,
                                                'created_at'=>$date,'updated_at'=>$date)
                        );

                        return Response::json(array('Success' => 'true'));
                }

                public function allUsuario(){
                        $retVal = DB::table('usuario')->get();
                        return Response::json($retVal);
                }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class MensajeController extends Controller
{
    
public function saveRol(Request $request){
			$nombreM = $request->input('nombreMensaje');
                        $gravedadM = $request->input('gravedadMensaje');
                        $descM = $request->input('descriptionMensaje');
                        $date = Carbon::now();

                                                DB::statement('SET FOREIGN_KEY_CHECKS=0;');
                        DB::table('mensaje')->insert(
                                array('nombre'=>$nombreM, 'descripcion'=>$descM, 'gravedad'=>$gravedadM,
                                                'created_at'=>$date,'updated_at'=>$date)
                        );

                        return Response::json(array('Success' => 'true'));
                }

                public function allMensaje(){
                        $retVal = DB::table('mensaje')->get();
                        return Response::json($retVal);
                }
}

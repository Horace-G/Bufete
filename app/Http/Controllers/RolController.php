<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Response;
use Carbon\Carbon;
use DB;

class RolController extends Controller
{
   public function saveRol(Request $request){
                        $nombreR = $request->input('nombreRol');
                        $descR = $request->input('descriptionRol');
                        $estadoR = $request->input('estadoRol');
                        $date = Carbon::now();

                        DB::table('rol')->insert(
                                array('nombre'=>$nombreR, 'descripcion'=>$descR, 'estado'=>$estadoR,
                                                'created_at'=>$date,'updated_at'=>$date)
                        );

                        return Response::json(array('Success' => 'true'));
                }

                public function allRol(){
                        $retVal = DB::table('rol')->get();
                        return Response::json($retVal);
                }

}
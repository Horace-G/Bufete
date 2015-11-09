<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Response;
use Carbon\Carbon;
use DB;
    use Auth;


class HistorialCicloVidaController extends Controller
{
		public function saveHistorialCicloVida(Request $request){
                        $idMedicamento = $request->input('id_medicamentoHistorial');
                        $idEstado = $request->input('id_EstadoHistorial');
                        $estado = $request->input('estadoHistorial');
                        $date = Carbon::now();


                        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
                        DB::table('historial_ciclo_vida')->insert(
                                array('medicamentoId'=>$idMedicamento, 'ciclo_vidaId'=>$idEstado, 'estado'=>$estado,
                                                'fecha'=>$date)
                        );

                        return Response::json(array('Success' => 'true'));
                }

		public function getHistorial(Request $request){
                        $id = $request->input('id_medicamentoHistorial');
                        $retVal = DB::table('medicamento')->join('historial_ciclo_vida', 'historial_ciclo_vida.medicamentoId', '=', 'medicamento.id')->join('ciclo_vida', 'ciclo_vida.id', '=', 'historial_ciclo_vida.ciclo_vida.id')->select('ciclo_vida.nombre', 'historial_ciclo_vida.fecha')
                            ->select('ciclo_vida.nombre as NombreCicloVida','historial_ciclo_vida.fecha as FechaCambio','medicamento.user_created as UsuarioCambio')
                            ->where('medicamento.id', $id)->get();
                        return json_encode($retVal);
                }

                public function allHistorialCicloVida(){
                        $retVal = DB::table('historial_ciclo_vida')->where('estado','=',1)->get();
                        return $retVal;
                }

                public function allHistorialCicloVidaMod(){
                        $retVal = DB::table('historial_ciclo_vida')->get();
                        return $retVal;
                }


}

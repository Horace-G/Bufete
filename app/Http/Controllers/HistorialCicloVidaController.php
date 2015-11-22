<?php

namespace App\Http\Controllers;

use Mail;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Response;
use Carbon\Carbon;
use DB;
    use Auth;


class HistorialCicloVidaController extends Controller
{
		public function saveHistorialCicloVida(Request $request){
			$permiso = DB::table('usuario')->join('rol', 'usuario.rol_id','=','rol.id')->join('rol_permiso', 'rol_permiso.rol_id', '=', 'rol.id')
        ->join('permiso', 'rol_permiso.permiso_id', '=', 'permiso.id')->select('permiso.id')->where('permiso.id', '14')
        ->where('usuario.id', Auth::user()->id)->count();

        if($permiso<1){
                return Response::json(array('Success' => 'false'));
                //return redirect()->route('/');
        }


                        $idMedicamento = $request->input('idMedicamento');
                        $idEstado = $request->input('idEstado');
                        $idEstadoViejo = $request->input('idEstadoViejo');
                        
                        $nombreEstado = DB::table('ciclo_vida')->select('nombre')->where('id','=',$idEstado)->get()[0]->nombre
                        
                        $nombreEstadoViejo = $request->input('nombreEstadoViejo');
                        //$estado = $request->input('estadoHistorial');
                        $date = Carbon::now();


                        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
                        DB::table('historial_ciclo_vida')->insert(
                                array('medicamentoId'=>$idMedicamento, 'ciclo_vidaId'=>$idEstadoViejo, 'estado'=>0,
                                                'fecha'=>$date)
                        );
            
            $medicamento = DB::table('medicamento')->select('nombre','laboratorioId')->where('id','=',$idMedicamento)->get();
            
            
    $laboratorioInfo = DB::table('laboratorio')->select('nombre','correo')->where('id','=',$medicamento[0]->laboratorioId);
        if ($laboratorioInfo->count() == 0){
            return Response::json(array('Success' => 'false'));
        }
$laboratorioInfo = $laboratorioInfo->get();    
Mail::send('estadoEmail',array('labName'=>$laboratorioInfo[0]->nombre,'medName'=>$medicamento[0]->nombre,'oldEstado'=>$nombreEstadoViejo,'newEstado'=>$nombreEstado),function($message) use($laboratorioInfo){
        $message->to($laboratorioInfo[0]->correo,$laboratorioInfo[0]->nombre)->subject('Estado de vida medicamento modificado - Bufete Galdamez');
    });
            
                        DB::table('medicamento')->where('id','=',$idMedicamento)->update(array('estado' => $idEstado));

                        
            
                        return Response::json(array('Success' => 'true'));
                }

		public function getHistorial(Request $request){
                        $id = $request->input('id_medicamentoHistorial');
                        $retVal = DB::table('historial_ciclo_vida')
                            ->join('medicamento','medicamento.id','=','historial_ciclo_vida.medicamentoId')
                            ->join('ciclo_vida', 'ciclo_vida.id', '=', 'historial_ciclo_vida.ciclo_vidaId')
                            ->select('ciclo_vida.nombre as NombreCicloVida','historial_ciclo_vida.fecha as FechaCambio','medicamento.user_created as UsuarioCambio')
                            ->where('medicamento.id', $id)->get();
                        return Response::json($retVal);
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

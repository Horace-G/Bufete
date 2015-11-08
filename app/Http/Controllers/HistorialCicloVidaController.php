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
                                array('id_medicamento'=>$idMedicamento, 'id_estado'=>$idEstado, 'estado'=>$estado,
                                                'created_at'=>$date)
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

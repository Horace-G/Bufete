<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Response;
use Carbon\Carbon;
use DB;

    use Auth;
class MedicamentoController extends Controller
{
    public function saveMedicamento(Request $request){
	$nombreM = $request->input('nombreMedicamento');
        $modalidadVentaM = $request->input('modalidadVentaMedicamento');
	$formaFarmaceuticaM = $request->input('formaFarmaceuticaMedicamento');
	$presentacionComercialM = $request->input('presentacionComercialMedicamento');
	$viaAdministracionM = $request->input('viaAdministracionMedicamento');
	$laboratorioM = $request->input('laboratorioMedicamento');
        $representanteM = $request->input('responsableMedicamento');
	$user_created = Auth::user()->username;
	$estadoM = $request->input('estadoMedicamento');
        $date = Carbon::now();
	
	$exists = DB::table('medicamento')->select('nombre')->where('nombre', $nombreM)->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }

	
	DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('medicamento')->insert(
		array('nombre'=>$nombreM, 'modalidadVentaId'=>$modalidadVentaM, 'formaFarmaceuticaId'=>$formaFarmaceuticaM, 'presentacionComercialId'=>$presentacionComercialM, 'viaAdministracionId'=>$viaAdministracionM, 'laboratorioId'=>$laboratorioM, 'representante'=>$representanteM, 'estado'=>$estadoM, 'user_created'=>$user_created, 'user_updated'=>$user_created, 'created_at'=>$date, 'updated_at'=>$date));
	return Response::json(array('Success' => 'true'));
    }

    public function updateMedicamento(Request $request){
	$id = $request->input('idMedicamento');
	$nombreM = $request->input('nombreMedicamento');
        $modalidadVentaM = $request->input('modalidadVentaMedicamento');
        $formaFarmaceuticaM = $request->input('formaFarmaceuticaMedicamento');
        $presentacionComercialM = $request->input('presentacionComercialMedicamento');
        $viaAdministracionM = $request->input('viaAdministracionMedicamento');
        $laboratorioM = $request->input('laboratorioMedicamento');
        $representanteM = $request->input('responsableMedicamento');
        $user_created = Auth::user()->username;
        $estadoM = $request->input('estadoMedicamento');
        $date = Carbon::now();

        $exists = DB::table('medicamento')->select('nombre')->where('nombre', $nombreM)->whereNotIn('id', array($id))->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }


        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('medicamento')->where('id','=', $id)->update(
                array('nombre'=>$nombreM, 'modalidadVentaId'=>$modalidadVentaM, 'formaFarmaceuticaId'=>$formaFarmaceuticaM, 'presentacionComercialId'=>$presentacionComercialM, 'viaAdministracionId'=>$viaAdministracionM, 'laboratorioId'=>$laboratorioM, 'representante'=>$representanteM, 'estado'=>$estadoM, 'user_updated'=>$user_created, 'updated_at'=>$date));

    }

    public function allMedicamento(){
	$retVal = DB::table('medicamento')->get();
        return Response::json($retVal);
    }
    public function allMedicamentoMod(){
        $retVal = DB::table('medicamento')->where('estado','=',1)->get();
    }
    
    public function getMedicamento(Request $request){
        //$id = request->input('idMedicamento');
        $id = 1;
        $medicamento = DB::table('medicamento')
                            ->join('forma_farmaceutica','medicamento.formaFarmaceuticaId','=','forma_farmaceutica.id')
                            ->join('modalidad_venta','medicamento.modalidadVentaId','=','modalidad_venta.id')
                            ->join('presentacion_comercial','medicamento.presentacionComercialId','=','presentacion_comercial.id')
                            ->join('via_administracion','medicamento.viaAdministracionId','=','via_administracion.id')
                            ->join('laboratorio','medicamento.laboratorioId','=','laboratorio.id')
                            ->where('medicamento.id','=',$id)->get();        
    }
}

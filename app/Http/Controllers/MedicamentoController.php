<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Response;
use Carbon\Carbon;
use DB;

class MedicamentoController extends Controller
{
    public function saveMedicamento(Request $request){
	$nombreM = $request->input('nombreMedicamento');
        $modalidadVentaM = $request->input('modalidadVentaMedicamento');
	$formaFarmaceuticaM = $request->input('formaFarmaceuticaMedicamento');
	$presentacionComercialM = $request->input('presentacionComercialMedicamento');
	$viaAdministracionM = $request->input('viaAdministracionMedicamento');
	$laboratorioM = $request->input('laboratorioMedicamento');
        $representanteM = $request->input('representanteMedicamento');
	$user_created = $request->input('userMedicamento');
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

    public function allMedicamento(){
	$retVal = DB::table('medicamento')->get();
        return Response::json($retVal);
    }
}

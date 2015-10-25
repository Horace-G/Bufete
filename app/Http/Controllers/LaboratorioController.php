<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Response;
use Carbon\Carbon;
use DB;
use Log;

class LaboratorioController extends Controller
{
    public function saveLaboratorio(Request $request){
		$nombre = $request->input('nameLaboratorio');
		$direccion = $request->input('descriptionLaboratorio');
		$correo = $request->input('correoLaboratorio');
		$telefonos = $request->input('telefonoLaboratorio');
	
		
		$user_created = $request->input('userLaboratorio');
		$estadoM = $request->input('estadoLaboratorio');
	    $date = Carbon::now();
	
		DB::statement('SET FOREIGN_KEY_CHECKS=0;');
	    $idLab = DB::table('laboratorio')->insertGetId(
	       	array('nombre'=>$nombre, 'direccion'=>$direccion, 'correo'=>$correo,'user_created'=>$user_created,'user_updated'=>$user_created,'estado'=>$estadoM)
	    );
	    
	    
	    foreach ($telefonos as $telefono){
	    		DB::table('telefonoLaboratorio')->insert(
	    			array('laboratorio_id'=>$idLab,'telefono'=>$telefono,'user_created'=>$user_created,'user_updated'=>$user_created)
	    		);
	    };
	    
	    
		return Response::json(array('Success' => 'true'));
    }

    public function allMedicamento(){
	$retVal = DB::table('medicamento')->get();
        return Response::json($retVal);
    }
}

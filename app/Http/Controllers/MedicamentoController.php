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
	$nombreM = $request->input('nombreRol');
        $descR = $request->input('descriptionRol');
        $estadoR = $request->input('estadoRol');
        $date = Carbon::now();
    }

    public function allMedicamento(){
	$retVal = DB::table('medicamento')->get();
        return Response::json($retVal);
    }
}

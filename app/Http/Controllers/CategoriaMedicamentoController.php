<?php namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
	
	class CategoriaMedicamentoController extends Controller {
		
		public function saveCategoriaMedicamento(Request $request){
			$namePC = $request->input('nameCategoriaMedicamento');
			$descPC = $request->input('descriptionCategoriaMedicamento');
			$estadoPC = $request->input('estadoCategoriaMedicamento');
			$userCreate = $request->input('userCategoriaMedicamento');
			$date = Carbon::now();
			
			DB::statement('SET FOREIGN_KEY_CHECKS=0;');
			DB::table('categoria_medicamento')->insert(
				array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
						'created_at'=>$date,'updated_at'=>$date,'user_created'=>$userCreate,'user_updated'=>$userCreate)
			);
			
			return Response::json(array('Success' => 'true'));
		}
		
		public function allCategoriaMedicamento(){
			$retVal = DB::table('categoria_medicamento')->get();
			return Response::json($retVal);
		}
	}

<?php namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
	
	class EstadoCicloVidaController extends Controller {
		
		public function saveEstadoCicloVida(Request $request){
			$namePC = $request->input('nameEstadoCicloVida');
			$descPC = $request->input('descriptionEstadoCicloVida');
			$estadoPC = $request->input('estadoEstadoCicloVida');
			$userCreate = $request->input('userEstadoCicloVida');
			$date = Carbon::now();
			
			DB::statement('SET FOREIGN_KEY_CHECKS=0;');
			DB::table('ciclo_vida')->insert(
				array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
						'created_at'=>$date,'updated_at'=>$date,'user_created'=>$userCreate,'user_updated'=>$userCreate);
			);
			
			return Response::json(array('Success' => 'true'));
		}
		
		public function allEstadoCicloVida(){
			$retVal = DB::table('ciclo_vida')->get();
			return Response::json($retVal);
		}
	}

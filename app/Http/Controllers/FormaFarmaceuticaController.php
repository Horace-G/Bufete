<?php namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
	
	class FormaFarmaceuticaController extends Controller {
		
		public function saveFormaFarmaceutica(Request $request){
			$namePC = $request->input('nameFormaFarmaceutica');
			$descPC = $request->input('descriptionFormaFarmaceutica');
			$estadoPC = $request->input('estadoFormaFarmaceutica');
			$userCreate = $request->input('userFormaFarmaceutica');
			$date = Carbon::now();
			
			DB::statement('SET FOREIGN_KEY_CHECKS=0;');
			DB::table('forma_farmaceutica')->insert(
				array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
						'created_at'=>$date,'updated_at'=>$date,'user_created'=>$userCreate,'user_updated'=>$userCreate)
			);
			
			return Response::json(array('Success' => 'true'));
		}
		
		public function allFormaFarmaceutica(){
			$retVal = DB::table('forma_farmaceutica')->get();
			return Response::json($retVal);
		}
	}
<?php namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
	
	class PresentacionComercialController extends Controller {
		
		public function savePresentacionComercial(Request $request){
			$namePC = $request->input('namePresentacionComercial');
			$descPC = $request->input('descriptionPresentacionComercial');
			$estadoPC = $request->input('estadoPresentacionComercial');
			$userCreate = $request->input('userPresentacionComercial');
			$date = Carbon::now();
			
			DB::statement('SET FOREIGN_KEY_CHECKS=0;');
			DB::table('presentacion_comercial')->insert(
				array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
						'created_at'=>$date,'updated_at'=>$date,'user_created'=>$userCreate,'user_updated'=>$userCreate)
			);
			
			return Response::json(array('Success' => 'true'));
		}
		
		public function allPresentacionComercial(){
			$retVal = DB::table('presentacion_comercial')->get();
			return Response::json($retVal);
		}
	}

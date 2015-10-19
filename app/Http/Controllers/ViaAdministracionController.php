<?php namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
	
	class ViaAdministracionController extends Controller {
		
		public function saveViaAdministracion(Request $request){
			$namePC = $request->input('nameViaAdministracion');
			$descPC = $request->input('descriptionViaAdministracion');
			$estadoPC = $request->input('estadoViaAdministracion');
			$userCreate = $request->input('userViaAdministracion');
			$date = Carbon::now();
			
			DB::table('via_administracion')->insert(
				array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
						'created_at'=>$date,'updated_at'=>$date,'user_created'=>$userCreate,'user_updated'=>$userCreate);
			);
			
			return Response::json(array('Success' => 'true'));
		}
		
		public function allViaAdministracion(){
			$retVal = DB::table('via_administracion')->get();
			return Response::json($retVal);
		}
	}
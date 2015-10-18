<?php namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
	
	class ModalidadVentaController extends Controller {
		
		public function saveModalidadVenta(Request $request){
			$namePC = $request->input('nameModalidadVenta');
			$descPC = $request->input('descriptionModalidadVenta');
			$estadoPC = $request->input('estadoModalidadVenta');
			$userCreate = $request->input('userModalidadVenta');
			$date = Carbon::now();
			
			DB::table('modalidad_venta')->insert(
				array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
						'created_at'=>$date,'updated_at'=>$date,'user_created'=>$userCreate,'user_updated'=>$userCreate);
			);
			
			return Response::json(array('Success' => 'true'));
		}
		
		public function allModalidadVenta(){
			$retVal = DB::table('modalidad_venta')->get();
			return Response::json($retVal);
		}
	}

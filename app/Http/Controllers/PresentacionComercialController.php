<?php namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	
	class PresentacionComercialController extends Controller {
		
		public function savePresentacionComercial(Request $request){
			$name = $request->input('namePresentacionComercial');
			return Response::json(array('Success' => 'true'));
		}
	}

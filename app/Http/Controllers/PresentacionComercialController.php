<?php namespace App\Http\Controllers;
	
	use App\Http\Controllers\Controller;
	use App\Http\Requests;
	
	class PresentacionComercialController extends Controller {
		
		public function savePresentacionComercial(Request $request){
			$name = $request->input('namePresentacionComercial');
			return Response::json(array('Success' => 'true'));
		}
	}
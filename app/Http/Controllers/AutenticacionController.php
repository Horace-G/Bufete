<?php namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
    use Auth;
	
	class AutenticacionController extends Controller {
		
        public function authenticate(){
            if (Auth::attempt(['username' => $username, 'password' => $password,'estado' => '1']){
                return redirect()->intended('/');
            }
        }
		
	}

<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Routing\Controller as BaseController;
use Request;
use Input;
use Redirect;
use Toast;

class AutenticacionController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @return Response
     */
    public function authenticate()
    {
        $username = Input::get('username');
        $password = Input::get('password');
        if (Auth::attempt(['username' => $username, 'password' => $password,'estado'=>'1'],true)) {
            return redirect()->intended('/');
        }else{
            echo "<script>";
            echo "aler(gg)";
            echo "toastr.warning('Invalid Username or Password','Login Error')";
            echo "</script>";
	       return;        
}
    }
    
    public function logout(){
        Auth::logout();
    }
}

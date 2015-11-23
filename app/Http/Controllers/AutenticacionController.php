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
            echo "<link href='./public/CSS/toastr.css' rel='stylesheet'>";
            
            echo "<script src='./public/JS/toastr.js'></script>";
            echo "<script>";
            echo "toastr.info('Invalid Username or Password');";
            echo "</script>";
	       //return redirect()->intended('/');        
}
    }
    
    public function logout(){
        Auth::logout();
    }
}

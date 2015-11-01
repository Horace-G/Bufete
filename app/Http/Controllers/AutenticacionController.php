<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Routing\Controller;
use Request;
use Input;

class AutenticacionController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @return Response
     */
    public function authenticate()
    {
        $username = Input::('username');
        $password = Input::('password');
        if (Auth::attempt(['username' => $username, 'password' => $password,'estado'=>'1'],true)) {
            return redirect()->intended('/');
        }else{
            return redirect()->intended('/login');
        }
    }
    
    public function logout(){
        Auth::logout();
    }
}

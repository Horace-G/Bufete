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
        $username = Input::get('username');
        $password = Input::get('password');
        if (Auth::attempt(['username' => $username, 'password' => $password,'estado'=>'1'])) {
            // Authentication passed...
            return redirect()->intended('dashboard');
        }
    }
}

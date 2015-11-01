<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Routing\Controller;

class AutenticacionController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @return Response
     */
    public function authenticate()
    {
        if (Auth::attempt(['username' => $username, 'password' => $password,'estado'=>'1'])) {
            // Authentication passed...
            return redirect()->intended('dashboard');
        }
    }
}
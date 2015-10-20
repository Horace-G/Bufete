<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;
use Response;

class MensajeController extends Controller
{

                public function allMensaje(){
                        $retVal = DB::table('mensaje')->get();
                        return Response::json($retVal);
                }
}

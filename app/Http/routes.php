<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/TestL',function(){
	return view('welcome');
});

Route::post('/TestPOST',function(){
	return Response::json(array('TestKey' => 'TestValue'));
});

Route::post('/savePresentacionComercial','PresentacionComercialController@savePresentacionComercial');

Route::post('/saveModalidadVenta','ModalidadVentaController@saveModalidadVenta');

Route::post('/saveCategoriaMedicamento','CategoriaMedicamentoController@saveCategoriaMedicamento');

Route::post('/saveUsuario', 'UsuarioController@saveUsuario');

Route::post('/saveRol', 'RolController@saveRol');

Route::post('/saveEstadoCicloVida','EstadoCicloVidaController@saveEstadoCicloVida');

Route::post('/saveViaAdministracion','ViaAdministracionController@saveViaAdministracion');

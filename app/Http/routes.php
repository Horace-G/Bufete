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
[
    'middleware' => 'auth',
    'uses' => 'ProfileController@show'
]
['middleware' => 'auth', function() {
    // Only authenticated users may enter...
}]);
*/
/*
Route::get('/',['middleware' => 'auth',function () {
    return view('index');
}]);
*/

Route::get('/Pito',function () {
    return view('index');
});

Route::get('/',['middleware' => 'auth',function () {
    return view('index');
}]);

Route::get('/login',function(){
    return view('login');
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

Route::post('/saveMedicamento', 'MedicamentoController@saveMedicamento');

Route::post('/saveLaboratorio','LaboratorioController@saveLaboratorio');

Route::post('/saveFormaFarmaceutica','FormaFarmaceuticaController@saveFormaFarmaceutica');

Route::post('/savePermiso','PermisoController@savePermiso');

Route::post('/saveRolPermiso','RolPermisoController@saveRolPermiso');

Route::get('/allRol','RolController@allRol');

Route::get('/allFormaFarmaceutica','FormaFarmaceuticaController@allFormaFarmaceutica');

Route::get('/allPresentacionComercial','PresentacionComercialController@allPresentacionComercial');

Route::get('/allModalidadVenta','ModalidadVentaController@allModalidadVenta');

Route::get('/allCategoriaMedicamento','CategoriaMedicamentoController@allCategoriaMedicamento');

Route::get('/allEstadoCicloVida','EstadoCicloVidaController@allEstadoCicloVida');

Route::get('/allViaAdministracion','ViaAdministracionController@allViaAdministracion');

Route::get('allLaboratorio','LaboratorioController@allLaboratorio');

Route::get('/allMensaje','MensajeController@allMensaje');

Route::get('/allPermiso','PermisoController@allPermiso');

Route::get('/allRolPermiso','RolPermisoController@allRolPermiso');

//////////////////////////////

Route::get('/allRolMod','RolController@allRolMod');

Route::get('/allFormaFarmaceuticaMod','FormaFarmaceuticaController@allFormaFarmaceuticaMod');

Route::get('/allPresentacionComercialMod','PresentacionComercialController@allPresentacionComercialMod');

Route::get('/allModalidadVentaMod','ModalidadVentaController@allModalidadVentaMod');

Route::get('/allCategoriaMedicamentoMod','CategoriaMedicamentoController@allCategoriaMedicamentoMod');

Route::get('/allEstadoCicloVidaMod','EstadoCicloVidaController@allEstadoCicloVidaMod');

Route::get('/allViaAdministracionMod','ViaAdministracionController@allViaAdministracionMod');

Route::get('/allLaboratorioMod','LaboratorioController@allLaboratorioMod');

//////////////////////

Route::post('/updateCategoriaMedicamento','CategoriaMedicamentoController@updateCategoriaMedicamento');

///////////////////////

Route::post('/authenticate','AutenticacionController@authenticate');

Route::post('/logout','AutenticacionController@logout');

////////////////////////////

Route::post('/updatePresentacionComercial','PresentacionComercialController@updatePresentacionComercial');

Route::post('/updateModalidadVenta','ModalidadVentaController@updateModalidadVenta');

Route::post('/updateCategoriaMedicamento','CategoriaMedicamentoController@updateCategoriaMedicamento');

Route::post('/updateUsuario', 'UsuarioController@updateUsuario');

Route::post('/updateRol', 'RolController@updateRol');

Route::post('/updateEstadoCicloVida','EstadoCicloVidaController@updateEstadoCicloVida');

Route::post('/updateViaAdministracion','ViaAdministracionController@updateViaAdministracion');

Route::post('/updateMedicamento', 'MedicamentoController@updateMedicamento');

Route::post('/updateLaboratorio','LaboratorioController@updateLaboratorio');

Route::post('/updateFormaFarmaceutica','FormaFarmaceuticaController@updateFormaFarmaceutica');

Route::post('/updatePermiso','PermisoController@updatePermiso');

Route::post('/updateRolPermiso','RolPermisoController@updateRolPermiso');

Route::post('/allPermisoRol','RolPermisoController@allPermisoRol');

Route::get('/getMedicamento','MedicamentoController@getMedicamento');

Route::get('/allMedicamentoMod','MedicamentoController@allMedicamentoMod');

/*
Route::get('/auth/login', 'Auth\AuthController@getLogin');
Route::post('/auth/login', 'Auth\AuthController@postLogin');
Route::get('/auth/logout', 'Auth\AuthController@getLogout');
*/

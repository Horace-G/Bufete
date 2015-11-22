<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Response;
use Carbon\Carbon;
use DB;
use Schema;
use Mail;
    use Auth;
class MedicamentoController extends Controller
{
    public function saveMedicamento(Request $request){
	$permiso = DB::table('usuario')->join('rol', 'usuario.rol_id','=','rol.id')->join('rol_permiso', 'rol_permiso.rol_id', '=', 'rol.id')
	->join('permiso', 'rol_permiso.permiso_id', '=', 'permiso.id')->select('permiso.id')->where('permiso.id', '13')
	->where('usuario.id', Auth::user()->id)->count();

	if($permiso<1){
		return Response::json(array('Success' => 'false'));
		//return redirect()->intended('/');
	}


	$nombreM = $request->input('nombreMedicamento');
        $modalidadVentaM = $request->input('modalidadVentaMedicamento');
	$formaFarmaceuticaM = $request->input('formaFarmaceuticaMedicamento');
	$presentacionComercialM = $request->input('presentacionComercialMedicamento');
	$viaAdministracionM = $request->input('viaAdministracionMedicamento');
	$laboratorioM = $request->input('laboratorioMedicamento');
        $representanteM = $request->input('responsableMedicamento');
	$user_created = Auth::user()->username;
	$estadoM = $request->input('estadoMedicamento');
        $date = Carbon::now();
	
	$exists = DB::table('medicamento')->select('nombre')->where('nombre', $nombreM)->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }
    Mail::send('email',array('labName'=>'TEST','medName'=>$nombreM),function($message){
        $message->to('nivx14@gmail.com','TEST')->subject('Medicamento Ingresado - Bufete Galdamez');
    });
	
	DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('medicamento')->insert(
		array('nombre'=>$nombreM, 'modalidadVentaId'=>$modalidadVentaM, 'formaFarmaceuticaId'=>$formaFarmaceuticaM, 'presentacionComercialId'=>$presentacionComercialM, 'viaAdministracionId'=>$viaAdministracionM, 'laboratorioId'=>$laboratorioM, 'representante'=>$representanteM, 'estado'=>$estadoM, 'user_created'=>$user_created, 'user_updated'=>$user_created, 'created_at'=>$date, 'updated_at'=>$date));
        
        
	return Response::json(array('Success' => 'true'));
    }

    public function updateMedicamento(Request $request){
	$permiso = DB::table('usuario')->join('rol', 'usuario.rol_id','=','rol.id')->join('rol_permiso', 'rol_permiso.rol_id', '=', 'rol.id')
        ->join('permiso', 'rol_permiso.permiso_id', '=', 'permiso.id')->select('permiso.id')->where('permiso.id', '14')
        ->where('usuario.id', Auth::user()->id)->count();

        if($permiso<1){
                return Response::json(array('Success' => 'false'));
                //return redirect()->route('/');
        }


	$id = $request->input('idMedicamento');
	$nombreM = $request->input('nombreMedicamento');
        $modalidadVentaM = $request->input('modalidadVentaMedicamento');
        $formaFarmaceuticaM = $request->input('formaFarmaceuticaMedicamento');
        $presentacionComercialM = $request->input('presentacionComercialMedicamento');
        $viaAdministracionM = $request->input('viaAdministracionMedicamento');
        $laboratorioM = $request->input('laboratorioMedicamento');
        $representanteM = $request->input('responsableMedicamento');
        $user_created = Auth::user()->username;
        $estadoM = $request->input('estadoMedicamento');
        $date = Carbon::now();

        $exists = DB::table('medicamento')->select('nombre')->where('nombre', $nombreM)->whereNotIn('id', array($id))->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }


        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('medicamento')->where('id','=', $id)->update(
                array('nombre'=>$nombreM, 'modalidadVentaId'=>$modalidadVentaM, 'formaFarmaceuticaId'=>$formaFarmaceuticaM, 'presentacionComercialId'=>$presentacionComercialM, 'viaAdministracionId'=>$viaAdministracionM, 'laboratorioId'=>$laboratorioM, 'representante'=>$representanteM, 'estado'=>$estadoM, 'user_updated'=>$user_created, 'updated_at'=>$date));

    }

    public function allMedicamentoMod(){
	$retVal = DB::table('medicamento')->get();
        return Response::json($retVal);
    }
    public function allMedicamento(){
        $retVal = DB::table('medicamento')->get();
        
    }
    
    public function getMedicamento(Request $request){
        $id = $request->input('idMedicamento');
        //$id = 1;
        return Response::json($this->dataMedicamento($id));
	}
    
    public function dataMedicamento($id){
        $medicamento = DB::table('medicamento')
                            ->join('forma_farmaceutica','medicamento.formaFarmaceuticaId','=','forma_farmaceutica.id')
                            ->join('modalidad_venta','medicamento.modalidadVentaId','=','modalidad_venta.id')
                            ->join('presentacion_comercial','medicamento.presentacionComercialId','=','presentacion_comercial.id')
                            ->join('via_administracion','medicamento.viaAdministracionId','=','via_administracion.id')
                            ->join('laboratorio','medicamento.laboratorioId','=','laboratorio.id')
                            ->join('ciclo_vida','medicamento.estado','=','ciclo_vida.id')
                            ->select('medicamento.id as MedicamentoId','medicamento.nombre as MedicamentoNombre','forma_farmaceutica.nombre as FormaFarmaceuticaNombre','modalidad_venta.nombre as ModalidadNombre','presentacion_comercial.nombre as PresentacionComercialNombre','via_administracion.nombre as ViaAdminstracionNombre','laboratorio.nombre as LaboratorioNombre','ciclo_vida.nombre as CicloVidaNombre','medicamento.user_created as MedicamentoUserCreated','medicamento.user_updated as MedicamentoUserUpdated','medicamento.created_at as MedicamentoCreated','medicamento.updated_at as MedicamentoUpdated','medicamento.representante as NombreRepresentante','ciclo_vida.id as CicloVidaId')
                            ->where('medicamento.id','=',$id)->get();        
    	return $medicamento;
    }

    
    public function searchValues(){
        $retVal = Schema::getColumnListing('medicamento');
        return Response::json($retVal);
    }
    
    public function getSearch(Request $request){
        $searchBy = $request->input('searchBy');
        $palabraClave = $request->input('palabraClave');
        
        if ($searchBy == 'formaFarmaceuticaId'){
            $searchBy = 'forma_farmaceutica.nombre';
        }else if ($searchBy == 'modalidadVentaId'){
            $searchBy = 'modalidad_venta.nombre';
        }else if ($searchBy == 'presentacionComercialId'){
            $searchBy = 'presentacion_comercial.nombre';
        }else if ($searchBy == 'viaAdministracionId'){
            $searchBy = 'via_administracion.nombre';
        }else if ($searchBy == 'laboratorioId'){
            $searchBy = 'laboratorio.nombre';
        }else if ($searchBy == 'estado'){
            $searchBy = 'ciclo_vida.nombre';
        }else{
            $searchBy = 'medicamento.'.$searchBy;
        }
        
         $medicamento = DB::table('medicamento')
                            ->join('forma_farmaceutica','medicamento.formaFarmaceuticaId','=','forma_farmaceutica.id')
                            ->join('modalidad_venta','medicamento.modalidadVentaId','=','modalidad_venta.id')
                            ->join('presentacion_comercial','medicamento.presentacionComercialId','=','presentacion_comercial.id')
                            ->join('via_administracion','medicamento.viaAdministracionId','=','via_administracion.id')
                            ->join('laboratorio','medicamento.laboratorioId','=','laboratorio.id')
                            ->join('ciclo_vida','medicamento.estado','=','ciclo_vida.id')
                            ->select('medicamento.id as MedicamentoId','medicamento.nombre as MedicamentoNombre','forma_farmaceutica.nombre as FormaFarmaceuticaNombre','modalidad_venta.nombre as ModalidadNombre','presentacion_comercial.nombre as PresentacionComercialNombre','via_administracion.nombre as ViaAdminstracionNombre','laboratorio.nombre as LaboratorioNombre','ciclo_vida.nombre as CicloVidaNombre','medicamento.user_created as MedicamentoUserCreated','medicamento.user_updated as MedicamentoUserUpdated','medicamento.created_at as MedicamentoCreated','medicamento.updated_at as MedicamentoUpdated','medicamento.representante as NombreRepresentante','ciclo_vida.id as CicloVidaId')
                            ->where($searchBy,'LIKE',"%$palabraClave%")->get();        
        
        return Response::json($medicamento);
    }
}

<?php namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
    use Auth;
	
	class ModalidadVentaController extends Controller {
		
		public function saveModalidadVenta(Request $request){
			$permiso = DB::table('usuario')->join('rol', 'usuario.rol_id','=','rol.id')->join('rol_permiso', 'rol_permiso.rol_id', '=', 'rol.id')
        ->join('permiso', 'rol_permiso.permiso_id', '=', 'permiso.id')->select('permiso.id')->where('permiso.id', '5')
        ->where('usuario.id', Auth::user()->id)->count();

        if($permiso<1){
                return Response::json(array('Success' => 'false'));
                //return redirect()->route('/');
        }


			$namePC = $request->input('nameModalidadVenta');
			$descPC = $request->input('descriptionModalidadVenta');
			$estadoPC = $request->input('estadoModalidadVenta');
			$userCreate = Auth::user()->username;
			$date = Carbon::now();
			
			$exists = DB::table('modalidad_venta')->select('nombre')->where('nombre', $namePC)->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }

			DB::statement('SET FOREIGN_KEY_CHECKS=0;');
			DB::table('modalidad_venta')->insert(
				array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
						'created_at'=>$date,'updated_at'=>$date,'user_created'=>$userCreate,'user_updated'=>$userCreate)
			);
			
			return Response::json(array('Success' => 'true'));
		}

		public function updateModalidadVenta(Request $request){
			$permiso = DB::table('usuario')->join('rol', 'usuario.rol_id','=','rol.id')->join('rol_permiso', 'rol_permiso.rol_id', '=', 'rol.id')
        ->join('permiso', 'rol_permiso.permiso_id', '=', 'permiso.id')->select('permiso.id')->where('permiso.id', '6')
        ->where('usuario.id', Auth::user()->id)->count();

        if($permiso<1){
                return Response::json(array('Success' => 'false'));
                //return redirect()->route('/');
        }

			$id = $request->input('idModalidadVenta');
			$namePC = $request->input('nameModalidadVenta');
                        $descPC = $request->input('descriptionModalidadVenta');
                        $estadoPC = $request->input('estadoModalidadVenta');
                        $userCreate = Auth::user()->username;
                        $date = Carbon::now();

                        $exists = DB::table('modalidad_venta')->select('nombre')->where('nombre', $namePC)->whereNotIn('id', array($id))->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }

                        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
                        DB::table('modalidad_venta')->where('id','=', $id)->update(
                                array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
                                                'updated_at'=>$date,'user_updated'=>$userCreate)
                        );

                        return Response::json(array('Success' => 'true'));

		}
		
		public function allModalidadVenta(){
			$retVal = DB::table('modalidad_venta')->where('estado','=',1)->get();
			return Response::json($retVal);
		}
        
        public function allModalidadVentaMod(){
			$retVal = DB::table('modalidad_venta')->get();
			return Response::json($retVal);
		}
	}

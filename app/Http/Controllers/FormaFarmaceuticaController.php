<?php namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
    use Auth;
	
	class FormaFarmaceuticaController extends Controller {
		
		public function saveFormaFarmaceutica(Request $request){
			$permiso = DB::table('usuario')->join('rol', 'usuario.rol_id','=','rol.id')->join('rol_permiso', 'rol_permiso.rol_id', '=', 'rol.id')
        ->join('permiso', 'rol_permiso.permiso_id', '=', 'permiso.id')->select('permiso.id')->where('permiso.id', '3')
        ->where('usuario.id', Auth::user()->id)->count();

        if($permiso<1){
                return Response::json(array('Success' => 'false'));
                //return redirect()->route('/');
        }

			
			$namePC = $request->input('nameFormaFarmaceutica');
			$descPC = $request->input('descriptionFormaFarmaceutica');
			$estadoPC = $request->input('estadoFormaFarmaceutica');
			$userCreate = Auth::user()->username;
			$date = Carbon::now();
            
			$exists = DB::table('forma_farmaceutica')->select('nombre')->where('nombre', $namePC)->count(); 
			if ($exists>0){
				return Response::json(array('Success' => 'false'));
			}		
            
			DB::statement('SET FOREIGN_KEY_CHECKS=0;');
			DB::table('forma_farmaceutica')->insert(
				array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
						'created_at'=>$date,'updated_at'=>$date,'user_created'=>$userCreate,'user_updated'=>$userCreate)
			);
			
			return Response::json(array('Success' => 'true'));
		}

		public function updateFormaFarmaceutica(Request $request){
			$permiso = DB::table('usuario')->join('rol', 'usuario.rol_id','=','rol.id')->join('rol_permiso', 'rol_permiso.rol_id', '=', 'rol.id')
        ->join('permiso', 'rol_permiso.permiso_id', '=', 'permiso.id')->select('permiso.id')->where('permiso.id', '4')
        ->where('usuario.id', Auth::user()->id)->count();

        if($permiso<1){
                return Response::json(array('Success' => 'false'));
                //return redirect()->route('/');
        }

			$id = $request->input('idFormaFarmaceutica');
			$namePC = $request->input('nameFormaFarmaceutica');
                        $descPC = $request->input('descriptionFormaFarmaceutica');
                        $estadoPC = $request->input('estadoFormaFarmaceutica');
                        $userCreate = Auth::user()->username;
                        $date = Carbon::now();

                        $exists = DB::table('forma_farmaceutica')->select('nombre')->where('nombre', $namePC)->whereNotIn('id', array($id))->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }

                        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
                        DB::table('forma_farmaceutica')->where('id','=', $id)->update(
                                array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
                                                'updated_at'=>$date,'user_updated'=>$userCreate)
                        );

                        return Response::json(array('Success' => 'true'));

		}
		
		public function allFormaFarmaceutica(){
			$retVal = DB::table('forma_farmaceutica')->where('estado','=',1)->get();
			return Response::json($retVal);
		}
        
        public function allFormaFarmaceuticaMod(){
			$retVal = DB::table('forma_farmaceutica')->get();
			return Response::json($retVal);
		}
	}

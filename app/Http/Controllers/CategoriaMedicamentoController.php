<?php namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
	use Auth;

	class CategoriaMedicamentoController extends Controller {
		
		public function saveCategoriaMedicamento(Request $request){
			$namePC = $request->input('nameCategoriaMedicamento');
			$descPC = $request->input('descriptionCategoriaMedicamento');
			$estadoPC = $request->input('estadoCategoriaMedicamento');
			$userCreate = Auth::user()->username;
			$date = Carbon::now();
			
			$exists = DB::table('categoria')->select('nombre')->where('nombre', $namePC)->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }

			DB::statement('SET FOREIGN_KEY_CHECKS=0;');
			DB::table('categoria')->insert(
				array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
						'created_at'=>$date,'updated_at'=>$date,'user_created'=>$userCreate,'user_updated'=>$userCreate)
			);
			
			return Response::json(array('Success' => 'true'));
		}
		
		public function updateCategoriaMedicamento(Request $request){
			$id = $request->input('idCategoriaMedicamento');
			$namePC = $request->input('nameCategoriaMedicamento');
                        $descPC = $request->input('descriptionCategoriaMedicamento');
                        $estadoPC = $request->input('estadoCategoriaMedicamento');
                        $userCreate = Auth::user()->username;
                        $date = Carbon::now();

                        $exists = DB::table('categoria')->select('nombre')->where('nombre', $namePC)->whereNotIn('id', array($id))->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }

                        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
                        DB::table('categoria')->where('id','=', $id)->update(
                                array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
                                                'updated_at'=>$date, 'user_updated'=>$userCreate)
                        );

                        return Response::json(array('Success' => 'true'));

		}

		public function allCategoriaMedicamento(){
			$retVal = DB::table('categoria')->where('estado','=',1)->get();
			return Response::json($retVal);
		}
        
        public function allCategoriaMedicamentoMod(){
			$retVal = DB::table('categoria')->get();
			return Response::json($retVal);
		}
	}

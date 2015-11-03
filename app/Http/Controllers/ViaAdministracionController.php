<?php namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Illuminate\Routing\Controller;
	use Response;
	use Carbon\Carbon;
	use DB;
    use Auth;
	
	class ViaAdministracionController extends Controller {
		
		public function saveViaAdministracion(Request $request){
			$namePC = $request->input('nameViaAdministracion');
			$descPC = $request->input('descriptionViaAdministracion');
			$estadoPC = $request->input('estadoViaAdministracion');
			$userCreate = Auth::user()->username;
			$date = Carbon::now();
			
			$exists = DB::table('via_administracion')->select('nombre')->where('nombre', $namePC)->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }


			DB::statement('SET FOREIGN_KEY_CHECKS=0;');
			DB::table('via_administracion')->insert(
				array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
						'created_at'=>$date,'updated_at'=>$date,'user_created'=>$userCreate,'user_updated'=>$userCreate)
			);
			
			return Response::json(array('Success' => 'true'));
		}

		public function updateViaAdministracion(Request $request){
			$id = $request->input('idViaAdministracion');
			$namePC = $request->input('nameViaAdministracion');
                        $descPC = $request->input('descriptionViaAdministracion');
                        $estadoPC = $request->input('estadoViaAdministracion');
                        $userCreate = Auth::user()->username;
                        $date = Carbon::now();

                        $exists = DB::table('via_administracion')->select('nombre')->where('nombre', $namePC)->whereNotIn('id', $id)->count();
                        if ($exists>0){
                                return Response::json(array('Success' => 'false'));
                        }


                        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
                        DB::table('via_administracion')->where('id','=', $id)->update(
                                array('nombre'=>$namePC, 'descripcion'=>$descPC, 'estado'=>$estadoPC,
                                                'updated_at'=>$date,'user_updated'=>$userCreate)
                        );

                        return Response::json(array('Success' => 'true'));

		}
		
		public function allViaAdministracion(){
			$retVal = DB::table('via_administracion')->where('estado','=',1)->get();
			return Response::json($retVal);
		}
        
        public function allViaAdministracionMod(){
			$retVal = DB::table('via_administracion')->get();
			return Response::json($retVal);
		}
	}

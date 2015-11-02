<?php
use Illuminate\Database\Seeder;
 
class Presentacion_ComercialTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('presentacion_comercial')->delete();
 
        $presentaciones = array(
            ['id' => 1, 'nombre' => 'Presentacion 1', 'descripcion' => 'presentacion 1', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2, 'nombre' => 'Presentacion 2', 'descripcion' => 'presentacion 2', 'user_created' => 2, 'user_updated' => 2, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 3, 'nombre' => 'Presentacion 3', 'descripcion' => 'presentacion 3', 'user_created' => 3, 'user_updated' => 3, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('presentacion_comercial')->insert($presentaciones);
    }
 
}

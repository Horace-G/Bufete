<?php
use Illuminate\Database\Seeder;
 
class Presentacion_ComercialTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('presentacion_comercial')->delete();
 
        $presentaciones = array(
            ['id' => 1, 'nombre' => 'Caja con 20 Tabletas', 'descripcion' => '20 Tabletas', 'user_created' => 'Seeder', 'user_updated' => 'Seeder', 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2, 'nombre' => 'Frasco 60ML', 'descripcion' => 'Frasco 60ML', 'user_created' => 2, 'user_updated' => 2, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('presentacion_comercial')->insert($presentaciones);
    }
 
}

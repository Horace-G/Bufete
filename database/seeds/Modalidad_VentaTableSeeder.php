<?php
use Illuminate\Database\Seeder;
 
class Modalidad_VentaTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('modalidad_venta')->delete();
 
        $modalidades = array(
            ['id' => 1, 'nombre' => 'Modalidad 1', 'descripcion' => 'modalidad 1', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2, 'nombre' => 'Modalidad 2', 'descripcion' => 'modalidad 2', 'user_created' => 2, 'user_updated' => 2, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 3, 'nombre' => 'Modalidad 3', 'descripcion' => 'modalidad 3', 'user_created' => 3, 'user_updated' => 3, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('modalidad_venta')->insert($modalidades);
    }
 
}

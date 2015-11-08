<?php
use Illuminate\Database\Seeder;
 
class Modalidad_VentaTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('modalidad_venta')->delete();
 
        $modalidades = array(
            ['id' => 1, 'nombre' => 'Con Receta', 'descripcion' => 'Receta Medica', 'user_created' => 'Seeder', 'user_updated' => 'Seeder', 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2, 'nombre' => 'Venta Libre', 'descripcion' => 'OTC', 'user_created' => 'Seeder', 'user_updated' => 'Seeder', 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('modalidad_venta')->insert($modalidades);
    }
 
}

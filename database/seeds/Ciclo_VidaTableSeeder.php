<?php
use Illuminate\Database\Seeder;
 
class Ciclo_VidaTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('ciclo_vida')->delete();
 
        $estados = array(
            ['id' => 1, 'nombre' => 'Estado 1', 'descripcion' => 'estado 1', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2, 'nombre' => 'Estado 2', 'descripcion' => 'estado 2', 'user_created' => 2, 'user_updated' => 2, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 3, 'nombre' => 'Estado 3', 'descripcion' => 'estado 3', 'user_created' => 3, 'user_updated' => 3, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('ciclo_vida')->insert($estados);
    }
 
}

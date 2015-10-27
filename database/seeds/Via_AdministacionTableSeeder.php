<?php
use Illuminate\Database\Seeder;
 
class Via_AdministracionTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('via_administracion')->delete();
 
        $vias = array(
            ['id' => 1, 'nombre' => 'Via 1', 'descripcion' => 'via 1', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2, 'nombre' => 'Via 2', 'descripcion' => 'via 2', 'user_created' => 2, 'user_updated' => 2, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 3, 'nombre' => 'Via 3', 'descripcion' => 'via 3', 'user_created' => 3, 'user_updated' => 3, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('via_administracion')->insert($vias);
    }
 
}

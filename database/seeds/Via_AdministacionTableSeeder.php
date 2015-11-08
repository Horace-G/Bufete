<?php
use Illuminate\Database\Seeder;
 
class Via_AdministracionTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('via_administracion')->delete();
 
        $vias = array(
            ['id' => 1, 'nombre' => 'Oral', 'descripcion' => 'Oral', 'user_created' => 'Seeder', 'user_updated' => 'Seeder', 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2, 'nombre' => 'Inyectable', 'descripcion' => 'Parenperal', 'user_created' => 'Seeder', 'user_updated' => 'Seeder', 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('via_administracion')->insert($vias);
    }
 
}

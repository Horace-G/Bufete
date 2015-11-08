<?php

use Illuminate\Database\Seeder;
 
class Forma_FarmaceuticaTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('forma_farmaceutica')->delete();
 
        $formas = array(
            ['id' => 1, 'nombre' => 'Comprimidos Recubiertos', 'descripcion' => 'Comprimidos Recubiertos', 'user_created' => 'Seeder', 'user_updated' => 'Seeder', 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2, 'nombre' => 'Jarabe', 'descripcion' => 'Jarabe', 'user_created' => 'Seeder', 'user_updated' => 'Seeder', 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('forma_farmaceutica')->insert($formas);
    }
 
}

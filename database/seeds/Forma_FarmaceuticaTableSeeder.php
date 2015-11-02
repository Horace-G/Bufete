<?php

use Illuminate\Database\Seeder;
 
class Forma_FarmaceuticaTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('forma_farmaceutica')->delete();
 
        $formas = array(
            ['id' => 1, 'nombre' => 'Forma 1', 'descripcion' => 'forma 1', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2, 'nombre' => 'Forma 2', 'descripcion' => 'forma 2', 'user_created' => 2, 'user_updated' => 2, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 3, 'nombre' => 'Forma 3', 'descripcion' => 'forma 3', 'user_created' => 3, 'user_updated' => 3, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('forma_farmaceutica')->insert($formas);
    }
 
}

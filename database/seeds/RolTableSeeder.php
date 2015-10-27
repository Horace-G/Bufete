<?php
use Illuminate\Database\Seeder;
 
class RolTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('rol')->delete();
 
        $roles = array(
            ['id' => 1, 'nombre' => 'rol 1', 'descripcion' => 'rol 1', 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2, 'nombre' => 'rol 2', 'descripcion' => 'rol 2', 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 3, 'nombre' => 'rol 3', 'descripcion' => 'rol 3', 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('rol')->insert($roles);
    }
 
}

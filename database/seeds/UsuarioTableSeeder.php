<?php

use Illuminate\Database\Seeder;
 
class UsuarioTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('usuario')->delete();
 
        $usuarios = array(
            ['id' => 1, 'nombre' => 'User 1', 'username' => 'usr1', 'password' => 'pass1', 'estado'=> 1, 'rol_id'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
['id' => 2, 'nombre' => 'User 2', 'username' => 'usr2', 'password' => 'pass2', 'estado'=> 1, 'rol_id'=> 2, 'created_at' => new DateTime, 'updated_at' => new DateTime],
['id' => 3, 'nombre' => 'User 3', 'username' => 'usr3', 'password' => 'pass3', 'estado'=> 1, 'rol_id'=> 2, 'created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('usuario')->insert($usuarios);
    }
 
}

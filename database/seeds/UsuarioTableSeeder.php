<?php

use Illuminate\Database\Seeder;
 
class UsuarioTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('usuario')->delete();
 
        $usuarios = array(
            ['id' => 1, 'nombre' => 'Administrador', 'username' => 'admin', 'password' => bcrypt('admin1234'), 'estado'=> 1, 'rol_id'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]);
 
        // Uncomment the below to run the seeder
        DB::table('usuario')->insert($usuarios);
    }
 
}

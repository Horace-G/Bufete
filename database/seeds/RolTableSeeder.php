<?php
use Illuminate\Database\Seeder;
 
class RolTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('rol')->delete();
 
        $roles = array(
            ['id' => 1, 'nombre' => 'Administrador', 'descripcion' => 'Administrador', 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]);
 
        // Uncomment the below to run the seeder
        DB::table('rol')->insert($roles);
    }
 
}

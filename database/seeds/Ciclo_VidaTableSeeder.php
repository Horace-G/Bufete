<?php
use Illuminate\Database\Seeder;
 
class Ciclo_VidaTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('ciclo_vida')->delete();
 
        $estados = array(
            ['id'=>1,'nombre'=>'Ingresado','descripcion'=>'Ingresado','estado'=> 1, 'user_created'=>'Seeder','user_updated'=>'Seeder','created_at' => new DateTime, 'updated_at' => new DateTime],
            ['id'=>2,'nombre'=>'Colegio Medico','descripcion'=>'Colegio Medico','estado'=> 1, 'user_created'=>'Seeder','user_updated'=>'Seeder','created_at' => new DateTime, 'updated_at' => new DateTime],
            ['id'=>3,'nombre'=>'Registro Marcas','descripcion'=>'Registro Marcas','estado'=> 1, 'user_created'=>'Seeder','user_updated'=>'Seeder','created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('ciclo_vida')->insert($estados);
    }
 
}

<?php
use Illuminate\Database\Seeder;
 
class CategoriaTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('categoria')->delete();
 
        $categorias = array(
            ['id'=>1,'nombre'=>'Anti Alergico','descripcion'=>'Anti Alergico','estado'=> 1, 'user_created'=>'Seeder','user_updated'=>'Seeder','created_at' => new DateTime, 'updated_at' => new DateTime],
            ['id'=>2,'nombre'=>'Analgesico','descripcion'=>'Analgesico','estado'=> 1, 'user_created'=>'Seeder','user_updated'=>'Seeder','created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('categoria')->insert($categorias);
    }
 
}

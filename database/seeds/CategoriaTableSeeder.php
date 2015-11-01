<?php
use Illuminate\Database\Seeder;
 
class CategoriaTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('categoria')->delete();
 
        $categorias = array();
 
        // Uncomment the below to run the seeder
        DB::table('categoria')->insert($categorias);
    }
 
}

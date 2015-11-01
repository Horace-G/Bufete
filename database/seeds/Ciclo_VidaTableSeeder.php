<?php
use Illuminate\Database\Seeder;
 
class Ciclo_VidaTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('ciclo_vida')->delete();
 
        $estados = array();
 
        // Uncomment the below to run the seeder
        DB::table('ciclo_vida')->insert($estados);
    }
 
}

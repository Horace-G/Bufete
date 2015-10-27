<?php
use Illuminate\Database\Seeder;
 
class CategoriaTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('categoria')->delete();
 
        $categorias = array(
            ['id' => 1, 'nombre' => 'Categoria 1', 'descripcion' => 'cat1', 'estado'=> 1, 'user_created'=> 1, 'user_updated'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2, 'nombre' => 'Categoria 2', 'descripcion' => 'cat2', 'estado'=> 1, 'user_created'=> 2, 'user_updated'=> 2, 'created_at' => new DateTime, 'updated_at' => new DateTime],
['id' => 3, 'nombre' => 'Categoria 3', 'descripcion' => 'cat3', 'estado'=> 1, 'user_created'=> 3, 'user_updated'=> 3, 'created_at' => new DateTime, 'updated_at' => new DateTime]	
        );
 
        // Uncomment the below to run the seeder
        DB::table('categoria')->insert($categorias);
    }
 
}

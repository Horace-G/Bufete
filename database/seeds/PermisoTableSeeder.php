<?php
use Illuminate\Database\Seeder;
 
class PermisoTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('permiso')->delete();
 
        $permisos = array(
        ['id' => 1, 'descripcion' => 'Crear Estado Ciclo de Vida', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2, 'descripcion' => 'Modificar Estado Ciclo de Vida', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	   
		['id' => 3, 'descripcion' => 'Crear Forma Farmaceutica', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 4, 'descripcion' => 'Modificar Forma Farmaceutica', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	   
		['id' => 5, 'descripcion' => 'Crear Modalidad Venta', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 6, 'descripcion' => 'Modificar Modalidad Venta', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	   
		['id' => 7, 'descripcion' => 'Crear Categoria Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 8, 'descripcion' => 'Modificar Categoria Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	   
		['id' => 9, 'descripcion' => 'Crear Laboratorio', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 10, 'descripcion' => 'Modificar Laboratorio', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	   
		['id' => 11, 'descripcion' => 'Crear Permiso', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 12, 'descripcion' => 'Modificar Permiso', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    
		['id' => 13, 'descripcion' => 'Crear Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 14, 'descripcion' => 'Modificar Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    
		['id' => 15, 'descripcion' => 'Crear Presentación Comercial', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 16, 'descripcion' => 'Modificar Presentación Comercial', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    
		['id' => 17, 'descripcion' => 'Crear Via Administracion', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 18, 'descripcion' => 'Modificar Via Administracion', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
	    );
 
        // Uncomment the below to run the seeder
        DB::table('permiso')->insert($permisos);
    }
 
}

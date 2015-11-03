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
	    ['id' => 3, 'descripcion' => 'Eliminar Estado Ciclo Vida', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
		['id' => 4, 'descripcion' => 'Crear Forma Farmaceutica', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 5, 'descripcion' => 'Modificar Forma Farmaceutica', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 6, 'descripcion' => 'Eliminar Forma Farmaceutica', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
		['id' => 7, 'descripcion' => 'Crear Modalidad Venta', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 8, 'descripcion' => 'Modificar Modalidad Venta', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 9, 'descripcion' => 'Eliminar Modalidad Venta', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
		['id' => 10, 'descripcion' => 'Crear Categoria Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 11, 'descripcion' => 'Modificar Categoria Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 12, 'descripcion' => 'Eliminar Categoria Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
		['id' => 13, 'descripcion' => 'Crear Laboratorio', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 14, 'descripcion' => 'Modificar Laboratorio', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 15, 'descripcion' => 'Eliminar Laboratorio', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
		['id' => 16, 'descripcion' => 'Crear Permiso', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 17, 'descripcion' => 'Modificar Permiso', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 18, 'descripcion' => 'Eliminar Permiso', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
		['id' => 19, 'descripcion' => 'Crear Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 20, 'descripcion' => 'Modificar Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 21, 'descripcion' => 'Eliminar Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
		['id' => 22, 'descripcion' => 'Crear Presentación Comercial', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 23, 'descripcion' => 'Modificar Presentación Comercial', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 24, 'descripcion' => 'Eliminar Presentación Comercial', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
		['id' => 25, 'descripcion' => 'Crear Via Administracion', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 26, 'descripcion' => 'Modificar Via Administracion', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 27, 'descripcion' => 'Eliminar Via Administracion', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
        );
 
        // Uncomment the below to run the seeder
        DB::table('permiso')->insert($permisos);
    }
 
}

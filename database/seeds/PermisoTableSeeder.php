<?php
use Illuminate\Database\Seeder;
 
class PermisoTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('permiso')->delete();
 
        $permisos = array(
        ['id' => 1,'nombre'=>'CREATE_CICLO_VIDA', 'descripcion' => 'Crear Estado Ciclo de Vida', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 2,'nombre'=>'MOD_CICLO_VIDA', 'descripcion' => 'Modificar Estado Ciclo de Vida', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	   
		['id' => 3,'nombre'=>'CREATE_FORMA_FARMACEUTICA', 'descripcion' => 'Crear Forma Farmaceutica', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 4,'nombre'=>'MOD_FORMA_FARMACEUTICA', 'descripcion' => 'Modificar Forma Farmaceutica', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	   
		['id' => 5,'nombre'=>'CREATE_MODALIDAD_VENTA', 'descripcion' => 'Crear Modalidad Venta', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 6,'nombre'=>'MOD_MODALIDAD_VENTA', 'descripcion' => 'Modificar Modalidad Venta', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	   
		['id' => 7,'nombre'=>'CREATE_CATEGORIA_MEDICAMENTO', 'descripcion' => 'Crear Categoria Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 8,'nombre'=>'MOD_CATEGORIA_MEDICAMENTO', 'descripcion' => 'Modificar Categoria Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	   
		['id' => 9,'nombre'=>'CREATE_LABORATORIO', 'descripcion' => 'Crear Laboratorio', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 10,'nombre'=>'MOD_LABORATORIO', 'descripcion' => 'Modificar Laboratorio', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	   
		/*['id' => 11,'nombre'=>'CREATE_PERMISO', 'descripcion' => 'Crear Permiso', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 12,'nombre'=>'MOD_PERMISO', 'descripcion' => 'Modificar Permiso', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],*/
	    
		['id' => 13,'nombre'=>'CREATE_MEDICAMENTO', 'descripcion' => 'Crear Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 14,'nombre'=>'MOD_MEDICAMENTO', 'descripcion' => 'Modificar Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    
		['id' => 15,'nombre'=>'CREATE_PRESENTACION_COMERCIAL', 'descripcion' => 'Crear Presentación Comercial', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 16,'nombre'=>'MOD_PRESENTACION_COMERCIAL', 'descripcion' => 'Modificar Presentación Comercial', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    
		['id' => 17,'nombre'=>'CREATE_VIA_ADMINISTRACION', 'descripcion' => 'Crear Via Administracion', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
	    ['id' => 18,'nombre'=>'MOD_VIA_ADMINISTRACION', 'descripcion' => 'Modificar Via Administracion', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
        ['id' => 19,'nombre'=>'SEARCH_MEDICAMENTO', 'descripcion' => 'Busqueda Medicamento', 'user_created' => 1, 'user_updated' => 1, 'estado'=> 1, 'created_at' => new DateTime, 'updated_at' => new DateTime]
	    );
 
        // Uncomment the below to run the seeder
        DB::table('permiso')->insert($permisos);
    }
 
}

<?php
use Illuminate\Database\Seeder;
 
class PermisoUsuarioSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('rol_permiso')->delete();
 
        $permisos = array(
        ['rol_id'=>1,'permiso_id'=>1,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>2,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>3,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>4,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>5,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>6,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>7,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>8,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>9,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>10,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>13,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>14,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>15,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>16,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>17,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>18,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>19,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>20,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>21,'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['rol_id'=>1,'permiso_id'=>22,'created_at' => new DateTime, 'updated_at' => new DateTime],
        );
 
        // Uncomment the below to run the seeder
        DB::table('rol_permiso')->insert($permisos);
    }
 
}

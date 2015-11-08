<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);
        
	

        $this->call('CategoriaTableSeeder');
        $this->call('Ciclo_VidaTableSeeder');
        $this->call('Forma_FarmaceuticaTableSeeder');
        $this->call('Modalidad_VentaTableSeeder');
        $this->call('Presentacion_ComercialTableSeeder');
        $this->call('Via_AdministracionTableSeeder');

        $this->call('RolTableSeeder');
        $this->call('UsuarioTableSeeder');
	$this->call('PermisoTableSeeder');
        $this->call('MensajeTableSeeder');

	Model::reguard();
    }
}

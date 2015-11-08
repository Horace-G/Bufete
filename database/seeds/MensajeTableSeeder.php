<?php
use Illuminate\Database\Seeder;
 
class MensajeTableSeeder extends Seeder {
 
    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('mensaje')->delete();
 
        $mensajes = array(
            ['nombre'=>'LONG_64','descripcion'=>'- longitud excede lo permitido(64)','gravedad'=>1],
            ['nombre'=>'LONG_128','descripcion'=>'- longitud excede lo permitido(128)','gravedad'=>1],
            ['nombre'=>'INPUT_EMPTY','descripcion'=>'- campo es mandatorio','gravedad'=>1],
            ['nombre'=>'DOBLE_KEY','descripcion'=>'- Ya existe un registro con este valor','gravedad'=>1],
            ['nombre'=>'SUCCESS_SAVE','descripcion'=>'- Guardado exitosamente','gravedad'=>0],
            ['nombre'=>'FAILED_SAVED','descripcion'=>'- Ya existe un registro con este valor','gravedad'=>1],
            ['nombre'=>'INVALID_CHAR','descripcion'=>'- Caracteres invalidos','gravedad'=>1],
            ['nombre'=>'SHORT_8','descripcion'=>'- longitud muy corta(8)','gravedad'=>1],
            ['nombre'=>'NOMATCH','descripcion'=>'- elementos no coinciden','gravedad'=>1],
            ['nombre'=>'LONG_256','descripcion'=>'- longitud excede lo permitido(256)','gravedad'=>1],
            ['nombre'=>'INVALID_EMAIL','descripcion'=>'- no coincide con el formato de Email','gravedad'=>1],
            ['nombre'=>'ADD_NUM','descripcion'=>'- seleccione ingresar numero telefonico','gravedad'=>1],
            ['nombre'=>'NO_SELECTED','descripcion'=>'- no hay seleccionado','gravedad'=>1],
            ['nombre'=>'WUT','descripcion'=>'- WUT WUT','gravedad'=>3]
            );
 
        // Uncomment the below to run the seeder
        DB::table('mensaje')->insert($mensajes);
    }
 
}

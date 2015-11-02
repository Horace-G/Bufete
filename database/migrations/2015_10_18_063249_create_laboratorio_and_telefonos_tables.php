<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLaboratorioAndTelefonosTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('laboratorio', function (Blueprint $table) {
            $table->increments('id');
	    $table->string('nombre', 128);
	    $table->string('direccion', 256);
	    $table->string('correo', 30);
	    $table->string('user_created',64);
	    $table->string('user_updated',64);
	    $table->integer('estado')->unsigned()->default(1);
        $table->timestamps();
        });

            
	Schema::create('telefonoLaboratorio', function (Blueprint $table){
	    $table->increments('id');
        $table->integer('laboratorio_id')->unsigned();
	    $table->foreign('laboratorio_id')->references('id')->on('laboratorio')->onDelete('cascade');
	    $table->string('telefono', 15);
	    $table->string('user_created',64);
	    $table->string('user_updated',64);
        $table->timestamps();
	});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
	   Schema::drop('telefonoLaboratorio');
        Schema::drop('laboratorio');
    }
}

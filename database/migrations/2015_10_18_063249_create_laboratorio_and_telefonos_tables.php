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
	    $table->integer('user_created')->unsigned();
        $table->foreign('user_created')->references('id')->on('usuario')->onDelete('cascade');
        $table->integer('user_updated')->unsigned();
        $table->foreign('user_updated')->references('id')->on('usuario')->onDelete('cascade');
	    $table->integer('estado')->unsigned()->default(1);
        $table->timestamps();
        });

            
	Schema::create('telefonoLaboratorio', function (Blueprint $table){
	    $table->increments('id');
        $table->integer('laboraorio_id');
	    $table->foreign('laboratorio_id')->references('id')->on('laboratorio');
	    $table->string('telefono', 15);
        $table->integer('user_created')->unsigned();
        $table->foreign('user_created')->references('id')->on('usuario')->onDelete('cascade');
        $table->integer('user_updated')->unsigned();
        $table->foreign('user_updated')->references('id')->on('usuario')->onDelete('cascade');
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

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
	    $table->string('codigo', 64);
	    $table->string('nombre', 64);
	    $table->string('direccion', 64);
	    $table->string('correo', 64);
	    $table->integer('user_created')->unsigned();
            $table->foreign('user_created')->references('id')->on('usuario')->onDelete('cascade');
            $table->integer('user_updated')->unsigned();
            $table->foreign('user_updated')->references('id')->on('usuario')->onDelete('cascade');
	    $table->integer('estado')->unsigned()->default(1);
            $table->timestamps();
        });

	Schema::create('telefonos', function (Blueprint $table){
	    $table->integer('telefono_id')->unsigned()->default(0);
	    $table->foreign('telefono_id')->references('id')->on('laboratorio')->onDelete('cascade');
	    $table->string('telefono', 64);
	});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
	Schema::drop('telefonos');
        Schema::drop('laboratorio');
    }
}

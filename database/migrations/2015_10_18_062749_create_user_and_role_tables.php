<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserAndRoleTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario', function (Blueprint $table) {
            $table->increments('id');
	    $table->string('username', 64);
	    $table->string('password', 64);
	    $table->string('nombre_completo', 64);
	    $table->integer('rol_id')->unsigned()->default(0);
	    $table->foreign('rol_id')->references('id')->on('rol')->onDelete('cascade');
            $table->timestamps();
	    $table->integer('estado')->unsigned()->default(0);
        });

	Schema::create('rol', function (Blueprint $table){
	    $table->increments('id');
	    $table->string('nombre', 64);
	    $table->string('descripcion', 64);
	    $table->integer('estado')->unsigned()->default(0);
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
        Schema::drop('usuario');
	Schema::drop('rol');
    }
}

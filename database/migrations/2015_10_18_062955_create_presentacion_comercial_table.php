<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePresentacionComercialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('presentacion_comercial', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre', 64);
	    $table->string('descripcion', 128);
	    $table->integer('user_created')->unsigned();
	    $table->foreign('user_created')->references('id')->on('usuario')->onDelete('cascade');
	    $table->integer('user_updated')->unsigned();
            $table->foreign('user_updated')->references('id')->on('usuario')->onDelete('cascade');
	    $table->integer('estado')->unsigned()->default(1);
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
        Schema::drop('presentacion_comercial');
    }
}

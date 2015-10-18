<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateViaAdministracionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('via_administracion', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre', 64);
	    $table->string('descripcion', 64);
	    $table->integer('user_created')->unsigned();
            $table->foreign('user_created')->references('id')->on('usuario')->onDelete('cascade');
            $table->integer('user_updated')->unsigned();
            $table->foreign('user_updated')->references('id')->on('usuario')->onDelete('cascade');
	    $table->timestamps();
	    $table->integer('estado')->unsigned()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('via_administracion');
    }
}

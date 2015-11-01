<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermisoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permiso', function (Blueprint $table) {
            $table->increments('id');
            $table->string('descripcion', 64);
	    $table->integer('estado')->unsigned()->default(1);
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
        Schema::drop('permiso');
    }
}

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
	    $table->string('descripcion', 128);
	    $table->string('user_created',64);
	    $table->string('user_updated',64);
	    $table->timestamps();
	    $table->integer('estado')->unsigned()->default(1);
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

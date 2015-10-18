<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFormaFarmaceuticaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forma_farmaceutica', function (Blueprint $table) {
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
        Schema::drop('forma_farmaceutica');
    }
}
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
            $table->string('nombre',64);
            $table->string('descripcion', 64);
            $table->integer('estado')->unsigned()->default(1);
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
        Schema::drop('permiso');
    }
}

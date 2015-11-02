<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolPermisoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rol_permiso', function (Blueprint $table) {
            $table->integer('rol_id')->unsigned()->default(0);
            $table->foreign('rol_id')->references('id')->on('rol')->onDelete('cascade');

            $table->integer('permiso_id')->unsigned()->default(0);
            $table->foreign('permiso_id')->references('id')->on('permiso')->onDelete('cascade');

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
        Schema::drop('rol_permiso');
    }
}

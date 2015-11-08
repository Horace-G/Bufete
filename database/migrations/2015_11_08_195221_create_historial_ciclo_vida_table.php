<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHistorialCicloVidaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('historial_ciclo_vida', function (Blueprint $table) {
            $table->integer('medicamentoId')->unsigned()->default(0);
	    $table->foreign('medicamentoId')->references('id')->on('medicamento');
	    $table->integer('ciclo_vidaId')->unsigned()->default(0);
            $table->foreign('ciclo_vidaId')->references('id')->on('ciclo_vida');
	    $table->integer('estado')->unsigned()->default(1);
            $table->timestamp('fecha');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('historial_ciclo_vida');
    }
}

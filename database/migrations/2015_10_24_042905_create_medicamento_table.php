<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMedicamentoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicamento', function (Blueprint $table) {
            $table->increments('id');

            $table->string('nombre', 64);
        $table->integer('modalidadVentaId')->unsigned();
        $table->integer('formaFarmaceuticaId')->unsigned();
            $table->integer('presentacionComercialId')->unsigned();
        $table->integer('viaAdministracionId')->unsigned();
        $table->integer('laboratorioId')->unsigned();
        $table->string('representante',64);
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
        Schema::drop('medicamento');
    }
}

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
	$table->foreign('modalidadVentaId')->references('id')->on('modalidad_venta')->onDelete('cascade');


        $table->integer('formaFarmaceuticaId')->unsigned();
	$table->foreign('formaFarmaceuticaId')->references('id')->on('forma_farmaceutica')->onDelete('cascade');

        $table->integer('presentacionComercialId')->unsigned();
	$table->foreign('presentacionComercialId')->references('id')->on('presentacion_comercial')->onDelete('cascade');

        $table->integer('viaAdministracionId')->unsigned();
	$table->foreign('viaAdministracionId')->references('id')->on('via_administracion')->onDelete('cascade');

        $table->integer('laboratorioId')->unsigned();
	$table->foreign('laboratorioId')->references('id')->on('laboratorio')->onDelete('cascade');

        $table->string('representante',64);
	    $table->string('user_created',64);
	    $table->string('user_updated',64);
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

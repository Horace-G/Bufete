angular.module('myApp').controller('crearexpediente', ['$scope','$http','$location','mensajeService','medicamentoService', 
    function ($scope,$http,$location,mensajeService,medicamentoService) {
        var ctrl = this;
        var selectModalidad = [];
        var selectformaFarmaceutica = [];
        var selectpresentacionComercial = [];
        var selectViaAdministracion = [];
        var selectLaboratorio = [];
        
        var SelectedModalidad = {id:1,nombre:'tmp'};
        var SelectedPresentacion = {id:1,nombre:'tmp'};
        var SelectedVia = {id:1,nombre:'tmp'};
        var SelectedLab = {id:1,nombre:'tmp'};
        
            ctrl.initSelect = function(){
            
            medicamentoService.getPresentacionComercial().then(function(Presentaciones){
                selectpresentacionComercial = Presentaciones;
                console.log(selectpresentacionComercial);
            });
            
            medicamentoService.getModalidadVenta().then(function(Modalidades){
                selectModalidad = Modalidades;
            });
            
            medicamentoService.getViaAdministracion().then(function(Vias){
                selectViaAdministracion = Vias;
            });
            
            medicamentoService.getLaboratorio().then(function(Laboratorios){
                selectLaboratorio = Laboratorios;
            });
        };
        
        //No soy Pagoaga..... Muahahahahaahahahaaha
        //I'm Dave from Costumer Support. Hi
        //oh shit
        //oh hi Dave
        
    ctrl.initSelect();
}]);
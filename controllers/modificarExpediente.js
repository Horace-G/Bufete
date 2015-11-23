angular.module('myApp').controller('modificarExpediente', ['$scope','$http','$location','mensajeService','medicamentoService', function ($scope,$http,$location,mensajeService,medicamentoService) {
  var ctrl = this;
    $scope.Medicamentos=[];
    ctrl.init = function(){
       alert(sessionStorage.IdMedicamento);
       var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/getMedicamento';
        var request = {
                method: 'POST',
                url: baseUrl,
                data: {idMedicamento: sessionStorage.IdMedicamento}
        };
        $http(request).then(function(response){
            Medicamentos=response.data;
            console.log(Medicamentos);
            $scope.nombreExpediente=Medicamentos[0].MedicamentoNombre;
            $scope.responsable=Medicamentos[0].NombreRepresentante;
             if(typeof(Storage) !== "undefined") {
                sessionStorage.IdMedicamento=$scope.codigo;
                }else{   
                }
        });
        medicamentoService.getLaboratorio().then(function(data){
       laboratoriofabricante=data;
    
    var count = Object.keys(laboratoriofabricante).length;
    for(var i=0;i<count;i++){
        if($('#laboratorioModFabricante').find(":selected").text()=="Laboratorio Fabricante"){
    var $selectDropdown = 
      $("#laboratorioModFabricante")
       .empty()
       .html(' ');
    }else{
        var $selectDropdown = 
      $("#laboratorioModFabricante")
       
    }
    // add new value
    console.log(laboratoriofabricante[i]);
      var value = laboratoriofabricante[i].nombre;
        $selectDropdown.append(
        $("<option selected></option>")
        .attr("number",value)
        .text(value)
    );  
    // trigger event
    $selectDropdown.trigger('contentChanged');
    }
    });
    
    
    medicamentoService.getViaAdministracion().then(function(data){
       viaadministracion=data;
    
    var count = Object.keys(viaadministracion).length;
    for(var i=0;i<count;i++){
        if($('#viaModAdministracion').find(":selected").text()=="Via Administracion"){
    var $selectDropdown = 
      $("#viaModAdministracion")
       .empty()
       .html(' ');
    }else{
        var $selectDropdown = 
      $("#viaModAdministracion")
       
    }
    // add new value
    console.log(viaadministracion[i]);
      var value = viaadministracion[i].nombre;
        $selectDropdown.append(
        $("<option selected></option>")
        .attr("number",value)
        .text(value)
    );  
    // trigger event
    $selectDropdown.trigger('contentChanged');
    }
    });
    
    
    medicamentoService.getFormaFarmaceutica().then(function(data){
       formafarmaceutica=data;
    
    var count = Object.keys(formafarmaceutica).length;
    for(var i=0;i<count;i++){
        if($('#formaModFarmaceutica').find(":selected").text()=="forma farmaceutica"){
    var $selectDropdown = 
      $("#formaModFarmaceutica")
       .empty()
       .html(' ');
    }else{
        var $selectDropdown = 
      $("#formaModFarmaceutica")
       
    }
    // add new value
    console.log(formafarmaceutica[i]);
      var value = formafarmaceutica[i].nombre;
        $selectDropdown.append(
        $("<option selected></option>")
        .attr("number",value)
        .text(value)
    );  
    // trigger event
    $selectDropdown.trigger('contentChanged');
    }
    });
    
    medicamentoService.getModalidadVenta().then(function(data){
       modalidadventa=data;
    
    var count = Object.keys(modalidadventa).length;
    for(var i=0;i<count;i++){
        if($('#modalidadModVenta').find(":selected").text()=="Modalidad Venta"){
    var $selectDropdown = 
      $("#modalidadModVenta")
       .empty()
       .html(' ');
    }else{
        var $selectDropdown = 
      $("#modalidadModVenta")
       
    }
    // add new value
    console.log(modalidadventa[i]);
      var value = modalidadventa[i].nombre;
        $selectDropdown.append(
        $("<option selected></option>")
        .attr("number",value)
        .text(value)
    );  
    // trigger event
    $selectDropdown.trigger('contentChanged');
    }
    });
    
    
    medicamentoService.getPresentacionComercial().then(function(data){
       presentacioncomercial=data;
    
    var count = Object.keys(presentacioncomercial).length;
    for(var i=0;i<count;i++){
        if($('#presentacionModComercial').find(":selected").text()=="Presentacion Comercial"){
    var $selectDropdown = 
      $("#presentacionModComercial")
       .empty()
       .html(' ');
    }else{
        var $selectDropdown = 
      $("#presentacionModComercial")
       
    }
    // add new value
    console.log(presentacioncomercial[i]);
      var value = presentacioncomercial[i].nombre;
        $selectDropdown.append(
        $("<option selected></option>")
        .attr("number",value)
        .text(value)
    );  
    // trigger event
    $selectDropdown.trigger('contentChanged');
    }
    });
    };
    ctrl.init();
    
    
}]);
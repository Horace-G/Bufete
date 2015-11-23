var presentacioncomercial = [];
var modalidadventa= [];
var formafarmaceutica=[];
var viaadministracion=[];
var laboratoriofabricante=[];
var Medicamentos=[];
angular.module('myApp').controller('modificarExpediente', ['$scope','$http','$location','mensajeService','medicamentoService', function ($scope,$http,$location,mensajeService,medicamentoService) {
  var ctrl = this;
    
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
    $('#laboratorioModFabricante').val(Medicamentos[0].LaboratorioNombre);
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
    $('#viaModAdministracion').val(Medicamentos[0].ViaAdministracionNombre);
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
    $('#formaModFarmaceutica').val(Medicamentos[0].FormaFarmaceuticaNombre);
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
    $('#modalidadModVenta').val(Medicamentos[0].ModalidadNombre);
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
    $('#presentacionModComercial').val(Medicamentos[0].PresentacionComercialNombre);
    };
    $('select').on('contentChanged', function() {
    // re-initialize (update)
    $(this).material_select();
    });
    ctrl.init();
    
    $scope.submit = function () {
    
    $scope.valid = 1;
    var id_rol = 0;
    var id_presentacioncomercial = 0;
    var id_modalidadventa = 0;
    var id_viaadministracion = 0;
    var id_formafarmaceutica = 0;
    var id_laboratorio = 0;
    $scope.symbolsExp = new RegExp("[<>%\$!@#%^&*()_+]");
    
    if($scope.nombreExpediente.length == 0){
         mensajeService.ShowMessage('INPUT_EMPTY','Nombre');
        $scope.valid = 0;
        ngDialog.open({ template: 'templateId' });
    }
    
    if($scope.responsable.length == 0){
         mensajeService.ShowMessage('INPUT_EMPTY','Responsable');
        $scope.valid = 0;
    }
    
    if($scope.responsable.length>64){
         mensajeService.ShowMessage('LONG_64','Responsable');
        $scope.valid = 0;
    }
    
    if($scope.nombreExpediente.length>64){
         mensajeService.ShowMessage('LONG_64','Nombre');
        $scope.valid = 0;
    }
    
    if($scope.symbolsExp.test($scope.nombreExpediente)){
        mensajeService.ShowMessage('INVALID_CHAR','Nombre');
        $scope.valid = 0;
    }
    
    if($scope.symbolsExp.test($scope.responsable)){
        mensajeService.ShowMessage('INVALID_CHAR','Responsable');
        $scope.valid = 0;
    }
    
     if($scope.valid == 1){
        
        var path = $location.path($location.path());
        //
         var count = Object.keys(modalidadventa).length;
         for(var i=0;i<count;i++){
            if($('#modalidadModVenta').find(":selected").text()==modalidadventa[i].nombre){
                id_modalidadventa=modalidadventa[i].id;
                
                break;
            }
        }
        var count = Object.keys(presentacioncomercial).length;
         for(var i=0;i<count;i++){
            if($('#presentacionModComercial').find(":selected").text()==presentacioncomercial[i].nombre){
                id_presentacioncomercial=presentacioncomercial[i].id;
                
                break;
            }
        }
         var count = Object.keys(formafarmaceutica).length;
         for(var i=0;i<count;i++){
            if($('#formaModFarmaceutica').find(":selected").text()==formafarmaceutica[i].nombre){
                id_formafarmaceutica=formafarmaceutica[i].id;
                
                break;
            }
        }
        var count = Object.keys(viaadministracion).length;
         for(var i=0;i<count;i++){
            if($('#viaModAdministracion').find(":selected").text()==viaadministracion[i].nombre){
                id_viaadministracion=viaadministracion[i].id;
                
                break;
            }
        }
         var count = Object.keys(laboratoriofabricante).length;
         for(var i=0;i<count;i++){
            if($('#laboratorioModFabricante').find(":selected").text()==laboratoriofabricante[i].nombre){
                id_laboratorio=laboratoriofabricante[i].id;
                
                break;
            }
        }
		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/updateMedicamento';
		console.log(baseUrl);
         
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {nombreMedicamento: $scope.nombreExpediente,modalidadVentaMedicamento: id_modalidadventa, formaFarmaceuticaMedicamento: id_formafarmaceutica, viaAdministracionMedicamento: id_viaadministracion, presentacionComercialMedicamento: id_presentacioncomercial,laboratorioMedicamento: id_laboratorio, responsableMedicamento: $scope.responsable, userMedicamento: '1234', estadoMedicamento: '1'}
	};
    
	$http(request).then(function(response){
        if(response.data.Success=="true"){
            console.log(response.data.success);
            mensajeService.ShowMessage('SUCCESS_SAVE','Expediente');
        }else{
            mensajeService.ShowMessage('FAILED_SAVE','Expediente');
        }
	});
    }


};
    
}]);
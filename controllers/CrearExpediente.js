var presentacioncomercial = [];
var modalidadventa= [];
var formafarmaceutica=[];
var viaadministracion=[];
var laboratoriofabricante=[];
angular.module('myApp').controller('crearexpediente', ['$scope','$http','$location','mensajeService','medicamentoService', function ($scope,$http,$location,mensajeService,medicamentoService) {
$scope.init = function () {
    
    
    medicamentoService.getLaboratorio().then(function(data){
       laboratoriofabricante=data;
    
    var count = Object.keys(laboratoriofabricante).length;
    for(var i=0;i<count;i++){
        if($('#laboratorioFabricante').find(":selected").text()=="Laboratorio Fabricante"){
    var $selectDropdown = 
      $("#laboratorioFabricante")
       .empty()
       .html(' ');
    }else{
        var $selectDropdown = 
      $("#laboratorioFabricante")
       
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
        if($('#viaAdministracion').find(":selected").text()=="Via Administracion"){
    var $selectDropdown = 
      $("#viaAdministracion")
       .empty()
       .html(' ');
    }else{
        var $selectDropdown = 
      $("#viaAdministracion")
       
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
        if($('#formaFarmaceutica').find(":selected").text()=="forma farmaceutica"){
    var $selectDropdown = 
      $("#formaFarmaceutica")
       .empty()
       .html(' ');
    }else{
        var $selectDropdown = 
      $("#formaFarmaceutica")
       
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
        if($('#modalidadVenta').find(":selected").text()=="Modalidad Venta"){
    var $selectDropdown = 
      $("#modalidadVenta")
       .empty()
       .html(' ');
    }else{
        var $selectDropdown = 
      $("#modalidadVenta")
       
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
        if($('#presentacionComercial').find(":selected").text()=="Presentacion Comercial"){
    var $selectDropdown = 
      $("#presentacionComercial")
       .empty()
       .html(' ');
    }else{
        var $selectDropdown = 
      $("#presentacionComercial")
       
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
$('select').on('contentChanged', function() {
    // re-initialize (update)
    $(this).material_select();
  });


$scope.init();

 $scope.nombre = ''
 $scope.responsable = ''


$scope.submit = function () {
    
    $scope.valid = 1;
    var id_rol = 0;
    var id_presentacioncomercial = 0;
    var id_modalidadventa = 0;
    var id_viaadministracion = 0;
    var id_formafarmaceutica = 0;
    var id_laboratorio = 0;
    $scope.symbolsExp = new RegExp("[<>%\$!@#%^&*()_+]");
    
    if($scope.nombre.length == 0){
         mensajeService.ShowMessage('INPUT_EMPTY','Nombre');
        $scope.valid = 0;
    }
    
    if($scope.responsable.length == 0){
         mensajeService.ShowMessage('INPUT_EMPTY','Responsable');
        $scope.valid = 0;
    }
    
    if($scope.responsable.length>64){
         mensajeService.ShowMessage('LONG_64','Responsable');
        $scope.valid = 0;
    }
    
    if($scope.nombre.length>64){
         mensajeService.ShowMessage('LONG_64','Nombre');
        $scope.valid = 0;
    }
    
    if($scope.symbolsExp.test($scope.nombre)){
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
            if($('#modalidadVenta').find(":selected").text()==modalidadventa[i].nombre){
                id_modalidadventa=modalidadventa[i].id;
                
                break;
            }
        }
        var count = Object.keys(presentacioncomercial).length;
         for(var i=0;i<count;i++){
            if($('#presentacionComercial').find(":selected").text()==presentacioncomercial[i].nombre){
                id_presentacioncomercial=presentacioncomercial[i].id;
                
                break;
            }
        }
         var count = Object.keys(formafarmaceutica).length;
         for(var i=0;i<count;i++){
            if($('#formaFarmaceutica').find(":selected").text()==formafarmaceutica[i].nombre){
                id_formafarmaceutica=formafarmaceutica[i].id;
                
                break;
            }
        }
        var count = Object.keys(viaadministracion).length;
         for(var i=0;i<count;i++){
            if($('#viaAdministracion').find(":selected").text()==viaadministracion[i].nombre){
                id_viaadministracion=viaadministracion[i].id;
                
                break;
            }
        }
         var count = Object.keys(laboratoriofabricante).length;
         for(var i=0;i<count;i++){
            if($('#laboratorioFabricante').find(":selected").text()==laboratoriofabricante[i].nombre){
                id_laboratorio=laboratoriofabricante[i].id;
                
                break;
            }
        }
		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveExpediente';
		console.log(baseUrl);
         
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {nombreMedicamento: $scope.nombre,modalidadVentaMedicamentos: id_modalidadventa, formaFarmaceuticaMedicamento: id_formafarmaceutica, viaAdministracionMedicamento: id_viaadministracion, presentacionComercialMedicamento: id_presentacioncomercial,laboratorioMedicamento: id_laboratorio, responsableMedicamento: $scope.responsable, userMedicamento: '1234', estadoMedicamento: '1'}
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
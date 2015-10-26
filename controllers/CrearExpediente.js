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


$scope.submit = function () {
    
    $scope.valid = 1;
    var id = 0;
     if($scope.valid == 1){
        
        var path = $location.path($location.path());
        //
        var count = Object.keys(roles).length;
         for(var i=0;i<count;i++){
            if($('#dropdownid').find(":selected").text()==roles[i].nombre){
                id=roles[i].id;
            }
        }
        
		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveExpediente';
		console.log(baseUrl);
         
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {}
	};
    
	$http(request).then(function(response){
        if(response.data.success=="true"){
            console.log(response.data.success);
            mensajeService.ShowMessage('SUCCESS_SAVE','Expediente');
        }else{
            mensajeService.ShowMessage('FAILED_SAVE','Expediente');
        }
	});
    }


};
}]);
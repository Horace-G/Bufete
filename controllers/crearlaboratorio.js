angular.module('myApp').controller('crear_laboratorio', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {


$scope.nombre = '';
$scope.descripcion = '';
$scope.correo = '';
$scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
$scope.emails = new RegExp("^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$");
$scope.numbers = new RegExp("^[0-9]*$");
    $('select').material_select();
$scope.submitNumero = function () {
    
    $scope.validNumber = 1;
    
    //if(!$scope.numbers.test($scope.telefono)){
        
<<<<<<< HEAD
         $("#telefonoLaboratorio").css("color","red");
        //mensajeService.ShowMessage('LONG_64','Correo Laboratorio');\
        mensajeService.ShowMessage('INVALID_CHAR','Telefono');
        $scope.validNumber = 0;
=======
      //   $("#telefonoLaboratorio").css("color","red");
        //mensajeService.ShowMessage('LONG_64','Numero Laboratorio');
        //$scope.validNumber = 0;
>>>>>>> 70ea01ba4d0b43d4d62fcfc65c40eb9f32584756
        
    //}
   
    //if($scope.symbols.test($scope.telefonos)){
    if($('#dropdownid').find(":selected").text()=="Numeros Telefonicos"){
    var $selectDropdown = 
      $("#dropdownid")
       .empty()
       .html(' ');
        value = 1;
    }else{
        var $selectDropdown = 
      $("#dropdownid")
       
    }
    // add new value
    if($scope.validNumber == 1){
      var value = $scope.telefono;
        $selectDropdown.append(
        $("<option selected></option>")
        .attr("number",value)
        .text(value)
    );  
    $("#telefonoLaboratorio").css("color","black");
    }

    // trigger event
    $selectDropdown.trigger('contentChanged');
    //}else{
      //  toastr.error('ERROR!','WUT');     
    //}
  };


  $('select').on('contentChanged', function() {
    // re-initialize (update)
    $(this).material_select();
  });

$scope.submitGuardar = function () {
    
    $scope.valid = 1;
    
     if($scope.nombre.length==0){
         $("#nombreLaboratorio").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Laboratorio');
        $scope.valid = 0;
        
    }if($scope.descripcion.length==0){
       // $("#nombreLaboratorio").css("background","aliceblue");
        $("#direccionLaboratorio").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Laboratorio');
        $scope.valid = 0;
              
    }if($scope.correo.length==0){
       // $("#nombreLaboratorio").css("background","aliceblue");
        $("#correoElectronico").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Correo Laboratorio');
        $scope.valid = 0;
        
    }if($scope.nombre.length>128){
        $("#nombreLaboratorio").css("color","red");
        //$("#descripcionLaboratorio").css("background","aliceblue");
        mensajeService.ShowMessage('LONG_128','Nombre Laboratorio');
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>256){
        //$("#nombreLaboratorio").css("background","aliceblue");
        $("#direccionLaboratorio").css("color","red");
        mensajeService.ShowMessage('LONG_256','Descripcion Laboratorio');
        $scope.valid = 0;
    
    }if($scope.correo.length>64){
        //$("#correoLaboratorio").css("background","aliceblue");
        $("#correoElectronico").css("color","red");
        mensajeService.ShowMessage('LONG_64','Correo Laboratorio');
        $scope.valid = 0;
    
    }if(!$scope.emails.test($scope.correo)){
        
         $("#correoElectronico").css("color","red");
       // console.log("correo invalido");
       mensajeService.ShowMessage('INVALID_CHAR','Correo');
        $scope.valid = 0;
        
    }if($scope.symbols.test($scope.nombre)){
        $("#nombreLaboratorio").css("color","red");
       // $("#descripcionPresentacionComercial").css("background","aliceblue");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Laboratorio');
        $scope.valid = 0;
    
    }if($scope.symbols.test($scope.descripcion)){
        //$("#nombrePresentacionComercial").css("background","aliceblue");
        $("#direccionLaboratorio").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Laboratorio');
        $scope.valid = 0;
     
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
    
        
    }if($scope.valid == 1){
        $("#nombreLaboratorio").css("color","black");
        $("#descripcionLaboratorio").css("color","black");
        $("#correoElectronico").css("color","black");
        
        
        var path = $location.path($location.path());
        //
        var NumerosTelefonicos = [];
        angular.forEach(document.getElementById('dropdownid').options,function(telefono,key){
            NumerosTelefonicos.push(telefono.value);
        });
        
        console.log(NumerosTelefonicos);
        
		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveLaboratorio';
		console.log(baseUrl);
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameLaboratorio: $scope.nombre, descriptionLaboratorio: $scope.descripcion,correoLaboratorio: $scope.correo, telefonoLaboratorio: NumerosTelefonicos, userLaboratorio: '1234', estadoLaboratorio: '1'}
	};
	$http(request).then(function(response){
        if(response.data.Success=="true"){
            console.log(response.data.Success);
            
             $("#nombreLaboratorio").css("color","black");
            $("#descripcionLaboratorio").css("color","black");
            $scope.nombre = '';
            $scope.descripcion = '';
            mensajeService.ShowMessage('SUCCESS_SAVE','Laboratorio');
        }else{
            mensajeService.ShowMessage('FAILED_SAVE','Laboratorio');
        }
	});
    }


};
}]);
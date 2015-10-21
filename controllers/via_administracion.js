angular.module('myApp').controller('via_administracion', ['$scope','$http','$location', function ($scope,$http,$location) {

    $scope.nombre = '';
          $scope.descripcion='';
     $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
	
$scope.submit = function () {
     if($scope.nombre.length==0){
         $("#nombrePresentacionComercial").css("background","red");
        toastr.error("Nombre no puede ser vacio","Error(1)");
         return;
    }else if($scope.descripcion.length==0){
        $("#nombreViaAdministracion").css("background","aliceblue");
        $("#descripcionViaAdministracion").css("background","red");
        toastr.error("Descripcion no puede ser vacio","error(1)");
        return;     
    }else if($scope.nombre.length>64){
        $("#nombreViaAdministracion").css("background","red");
        $("#descripcionViaAdministracion").css("background","aliceblue");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        return;
    }else if($scope.descripcion.length>128){
        $("#nombreViaAdministracion").css("background","aliceblue");
        $("#descripcionViaAdministracion").css("background","red");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        return;    
    }else if($scope.symbols.test($scope.nombre)){
        $("#nombreViaAdministracion").css("background","red");
        $("#descripcionViaAdministracion").css("background","aliceblue");
        toastr.error("(2) se han ingresado caracteres no validos en el nombre");
        return;
    }else if($scope.symbols.test($scope.descripcion)){
        $("#nombreViaAdministracion").css("background","aliceblue");
        $("#descripcionViaAdministracion").css("background","red");
        toastr.error("(2) se han ingresado caracteres no validos en la Descripcion");
        return;
    }else{
        $("#nombreViaAdministracion").css("background","aliceblue");
        $("#descripcionViaAdministracion").css("background","aliceblue");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveViaAdministracion';
var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameViaAdministracion: $scope.nombre, descriptionViaAdministracion: $scope.descripcion, userViaAdministracion: '1234', estadoViaAdministracion: '1'}
	};
	
	    	$http(request).then(function(response){
		toastr.success("Se Agrego la via de administracion correctamente");
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
};
}]);
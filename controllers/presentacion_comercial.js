angular.module('myApp').controller('presentacion_comercial', ['$scope','$http','$location', function ($scope,$http,$location) {

 
$scope.nombre = '';
$scope.descripcion = '';
$scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");    
$scope.submit = function () {
    
    
    
     if($scope.nombre.length==0){
         $("#nombrePresentacionComercial").css("background","red");
        toastr.error("Nombre no puede ser vacio","Error(1)");
         return;
    }else if($scope.descripcion.length==0){
        $("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionPresentacionComercial").css("background","red");
        toastr.error("Descripcion no puede ser vacio","error(1)");
        return;       
    }else if($scope.nombre.length>64){
        $("#nombrePresentacionComercial").css("background","red");
        $("#descripcionPresentacionComercial").css("background","aliceblue");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        return;
    }else if($scope.descripcion.length>128){
        $("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionPresentacionComercial").css("background","red");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        return;    
    }else if($scope.symbols.test($scope.nombre)){
        $("#nombrePresentacionComercial").css("background","red");
        $("#descripcionPresentacionComercial").css("background","aliceblue");
        toastr.error("(2) se han ingresado caracteres no validos en el nombre");
        return;
    }else if($scope.symbols.test($scope.descripcion)){
        $("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionPresentacionComercial").css("background","red");
        toastr.error("(2) se han ingresado caracteres no validos en la Descripcion");
        return;
    }else{
        $("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionPresentacionComercial").css("background","aliceblue");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/savePresentacionComercial';
		console.log(baseUrl);
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {namePresentacionComercial: $scope.nombre, descriptionPresentacionComercial: $scope.descripcion, userPresentacionComercial: '1234', estadoPresentacionComercial: '1'}
	};
	$http(request).then(function(response){
		console.log(response.data.success);
		toastr.success("Se Agrego la presentacion comercial correctamente");
		$scope.nombre = '';
		$scope.descripcion = '';
	});
    }

          


};
}]);
angular.module('myApp').controller('presentacion_comercial', ['$scope','$http','$location', function ($scope,$http,$location) {

 
$scope.nombre = '';
$scope.descripcion = '';
$scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");    
$scope.submit = function () {
    
    $scope.valid = 1;
    
     if($scope.nombre.length==0){
         $("#nombrePresentacionComercial").css("color","red");
        toastr.error("Nombre no puede ser vacio","Error(1)");
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionPresentacionComercial").css("color","red");
        toastr.error("Descripcion no puede ser vacio","error(1)");
        $scope.valid = 0;
        return;       
    }if($scope.nombre.length>64){
        $("#nombrePresentacionComercial").css("color","red");
        //$("#descripcionPresentacionComercial").css("background","aliceblue");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
        //$("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionPresentacionComercial").css("color","red");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#nombrePresentacionComercial").css("color","red");
       // $("#descripcionPresentacionComercial").css("background","aliceblue");
        toastr.error("(2) se han ingresado caracteres no validos en el nombre");
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.descripcion)){
        //$("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionPresentacionComercial").css("color","red");
        toastr.error("(2) se han ingresado caracteres no validos en la Descripcion");
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
    
        
    }if($scope.valid == 1){
        $("#nombrePresentacionComercial").css("color","black");
        $("#descripcionPresentacionComercial").css("color","black");
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
		 $("#nombrePresentacionComercial").css("color","black");
        $("#descripcionPresentacionComercial").css("color","black");
		$scope.nombre = '';
		$scope.descripcion = '';
	});
    }


};
}]);
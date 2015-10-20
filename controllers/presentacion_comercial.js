angular.module('myApp').controller('presentacion_comercial', ['$scope','$http','$location', function ($scope,$http,$location) {

 
$scope.nombre = '';
$scope.descripcion = '';
$scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");    
$scope.submit = function () {
    
    
    
     if($scope.nombre.length>64||$scope.descripcion.length>128){
        toastr.error("(1) ha exedido del tamaño maximo");
        return;
    }else if($scope.symbols.test($scope.nombre) || $scope.symbols.test($scope.descripcion)){
        toastr.error("(2) se han ingresado caracteres no validos");
        return;
    }else{
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
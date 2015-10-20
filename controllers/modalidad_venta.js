angular.module('myApp').controller('modalidad_venta', ['$scope','$http','$location', function ($scope,$http,$location) {
    $scope.nombre = '';
          $scope.descripcion='';
 $scope.symbols = new RegExp("/^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/");
		  
$scope.submit = function () {
    if ($scope.nombre == undefined || $scope.descripcion == undefined){
		alert('Datos ingresados erroneamente'); 
        return;
	}else if($scope.nombre.length>64||$scope.descripcion.length>128){
        alert('Datos ingresados no coinciden con la longitud'); 
        return;
    }else if($scope.symbols.test($scope.nombre)){
        alert("Datos ingresados contienen caracteres no validos");
        return;
    }else{
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveModalidadVenta';
var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameModalidadVenta: $scope.nombre, descriptionModalidadVenta: $scope.descripcion, userModalidadVenta: '1234', estadoModalidadVenta: '1'}
	};
	$http(request).then(function(response){
		console.log(response.data.success);
		alert('Guardado exitosamente')
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
};
}]);
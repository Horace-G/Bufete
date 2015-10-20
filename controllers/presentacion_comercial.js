angular.module('myApp').controller('presentacion_comercial', ['$scope','$http', function ($scope,$http) {

 
$scope.nombre = '';
$scope.descripcion = '';
    
$scope.submit = function () {
    
    $scope.symbols = new RegExp("/^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$ /");
    
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
	var request = {
			method: 'POST',
			url: "http://fia.unitec.edu:8082/Bufete/index.php/savePresentacionComercial",
			data: {namePresentacionComercial: $scope.nombre, descriptionPresentacionComercial: $scope.descripcion, userPresentacionComercial: '1234', estadoPresentacionComercial: '1'}
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
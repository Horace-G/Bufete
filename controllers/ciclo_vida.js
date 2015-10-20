angular.module('myApp').controller('ciclo_vida', ['$scope','$http', function ($scope,$http) {

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
var request = {
			method: 'POST',
			url: "http://fia.unitec.edu:8082/Bufete/index.php/saveEstadoCicloVida",
			data: {nameEstadoCicloVida: $scope.nombre, descriptionEstadoCicloVida: $scope.descripcion, userEstadoCicloVida: '1234', estadoEstadoCicloVida: '1'}
	};
$http(request).then(function(response){
		console.log(response.data.success);
		alert('Guardado exitosamente');
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
        
};
}]);
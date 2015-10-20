angular.module('myApp').controller('ciclo_vida', ['$scope','$http','$location', function ($scope,$http,$location) {

    $scope.nombre = '';
          $scope.descripcion='';
     $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
	 
$scope.submit = function () {
    if($scope.nombre.length==0){
        toastr.error("(1) Error","Nombre no puede ser vacio");
         
    }else if($scope.descripcion.length==0){
        toastr.error("(1) Error","Descripcion no puede ser vacio");
    }else if($scope.nombre.length>64||$scope.descripcion.length>128){
        toastr.error("(1) ha exedido del tamaño maximo");
        return;
    }else if($scope.symbols.test($scope.nombre) || $scope.symbols.test($scope.descripcion)){
        toastr.error("(2) se han ingresado caracteres no validos");
        return;
    }else{
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveEstadoCicloVida';
var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameEstadoCicloVida: $scope.nombre, descriptionEstadoCicloVida: $scope.descripcion, userEstadoCicloVida: '1234', estadoEstadoCicloVida: '1'}
	};
$http(request).then(function(response){
		console.log(response.data.success);
		toastr.success("Se Agrego el ciclo de vida correctamente");
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
        
};
}]);
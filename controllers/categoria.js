angular.module('myApp').controller('categoria', ['$scope','$http','$location', function ($scope,$http,$location) {
 
    $scope.nombre = '';
          $scope.descripcion='';
		   $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
    
$scope.submit = function () {
    if($scope.nombre.length==0){
        toastr.error("(1) Error","Nombre no puede ser vacio");
         
    }else if($scope.descripcion.length==0){
        toastr.error("(1) Error","Descripcion no puede ser vacio");
    }else if($scope.nombre.length>64||$scope.descripcion.length>128){
        toastr.error("(1) Error","ha exedido del tamaño maximo");
        return;
    }else if($scope.symbols.test($scope.nombre) || $scope.symbols.test($scope.descripcion)){
        toastr.error("(2) Error","se han ingresado caracteres no validos");
        return;
    }else{
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveCategoriaMedicamento';
        
var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameCategoriaMedicamento: $scope.nombre, descriptionCategoriaMedicamento: $scope.descripcion, userCategoriaMedicamento: '1234', estadoCategoriaMedicamento: '1'}
	};
	$http(request).then(function(response){
		console.log(response.data.success);
		toastr.success("Se Agrego","Se Agrego la categoria correctamente");
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
         

};
}]);
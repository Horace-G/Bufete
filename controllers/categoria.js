angular.module('myApp').controller('categoria', ['$scope','$http','$location','$stateParams', function ($scope,$http,$location,$stateParams) {
 
    $scope.nombre = '';
          $scope.descripcion='';
		   $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
    
$scope.submit = function () {
    if($scope.nombre.length==0){
        toastr.warning('Nombre ' + $stateParams.Mensaje[1].descripcion,'Warning');
         
    }else if($scope.descripcion.length==0){
        toastr.error("Descripcion no puede ser vacio","(1) Error");
    }else if($scope.nombre.length>64||$scope.descripcion.length>128){
        toastr.error("ha exedido del tamaño maximo", "(1) Error");
        return;
    }else if($scope.symbols.test($scope.nombre) || $scope.symbols.test($scope.descripcion)){
        toastr.error("se han ingresado caracteres no validos", "(2) Error");
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
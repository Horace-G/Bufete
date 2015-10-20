angular.module('myApp').controller('categoria', ['$scope','$http','$location', function ($scope,$http,$location) {
 
    $scope.nombre = '';
          $scope.descripcion='';
		   $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
    
$scope.submit = function () {
     if($scope.nombre.length>64||$scope.descripcion.length>128){
        toastr.error("Error de Longitud");
        return;
    }else if($scope.symbols.test($scope.nombre) || $scope.symbols.test($scope.descripcion)){
        toastr.error("Error de Symbolos");
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
		alert('Guardado exitosamente')
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
         

};
}]);
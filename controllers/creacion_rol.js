angular.module('myApp').controller('Creacion_Rol', ['$scope','$http','$location', function ($scope,$http,$location) {
    
    $scope.nombre = '';
          $scope.descripcion='';
		   $scope.symbols = new RegExp("/^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/");
    
$scope.submit = function () {
     if($scope.nombre.length>64||$scope.descripcion.length>128){
        toastr.error("Error de Longitud");
        return;
    }else if($scope.symbols.test($scope.nombre)){
        toastr.error("Error de Symbolos");
        return;
    }else{
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveRol';
        
var request = {
			method: 'POST',
			url: baseUrl,
			data: {nombreRol: $scope.nombre, descriptionRol: $scope.descripcion, estadoRol: '1'}
	};
	$http(request).then(function(response){
		console.log(response.data);
		alert('Guardado exitosamente');
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
};
}]);
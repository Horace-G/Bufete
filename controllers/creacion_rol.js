angular.module('myApp').controller('Creacion_Rol', ['$scope','$http','$location', function ($scope,$http,$location) {
    
    
		   $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
    
$scope.submit = function () {
     if($scope.nombre.length==0){
         $("#nombreRol").css("background","red");
        toastr.error("Nombre no puede ser vacio","Error(1)");
         return;
    }else if($scope.descripcion.length==0){
        $("#nombreRol").css("background","aliceblue");
        $("#descripcionRol").css("background","red");
        toastr.error("Descripcion no puede ser vacio","error(1)");
        return;    
    }else if($scope.nombre.length>64){
        $("#nombreRol").css("background","red");
        $("#descripcionRol").css("background","aliceblue");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        return;
    }else if($scope.descripcion.length>128){
        $("#nombreRol").css("background","aliceblue");
        $("#descripcionRol").css("background","red");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        return;    
    }else if($scope.symbols.test($scope.nombre)){
        $("#nombreRol").css("background","red");
        $("#descripcionRol").css("background","aliceblue");
        toastr.error("(2) se han ingresado caracteres no validos en el nombre");
        return;
    }else if($scope.symbols.test($scope.descripcion)){
        $("#nombreRol").css("background","aliceblue");
        $("#descripcionRol").css("background","red");
        toastr.error("(2) se han ingresado caracteres no validos en la Descripcion");
        return;
    }else{
        $("#nombreRol").css("background","aliceblue");
        $("#descripcionRol").css("background","aliceblue");
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
		toastr.success("Se Agrego el rol correctamente");
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
};
}]);
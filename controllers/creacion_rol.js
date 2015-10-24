angular.module('myApp').controller('Creacion_Rol', ['$scope','$http','$location', function ($scope,$http,$location) {
    
    
		   $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
    
$scope.submit = function () {
    
    $scope.valid = 1;
    
     if($scope.nombre.length==0){
         $("#nombreRol").css("color","red");
        toastr.error("Nombre no puede ser vacio","Error(1)");
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#nombreRol").css("background","aliceblue");
        $("#descripcionRol").css("color","red");
        toastr.error("Descripcion no puede ser vacio","error(1)");
        $scope.valid = 0;
        return;    
    }if($scope.nombre.length>64){
        $("#nombreRol").css("color","red");
       // $("#descripcionRol").css("background","aliceblue");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
        //$("#nombreRol").css("background","aliceblue");
        $("#descripcionRol").css("color","red");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#nombreRol").css("color","red");
       // $("#descripcionRol").css("background","aliceblue");
        toastr.error("(2) se han ingresado caracteres no validos en el nombre");
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.descripcion)){
       // $("#nombreRol").css("background","aliceblue");
        $("#descripcionRol").css("color","red");
        toastr.error("(2) se han ingresado caracteres no validos en la Descripcion");
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
        
        
    }if($scope.valid == 1){
        $("#nombreRol").css("color","black");
        $("#descripcionRol").css("color","black");
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
		$("#nombreRol").css("color","black");
        $("#descripcionRol").css("color","black");
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
};
}]);
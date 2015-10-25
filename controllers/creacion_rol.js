angular.module('myApp').controller('Creacion_Rol', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
    
            $scope.nombre = '';
$scope.descripcion = '';
		   $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
    
$scope.submit = function () {
    
    $scope.valid = 1;
    
     if($scope.nombre.length==0){
         $("#nombrePresentacionComercial").css("color","red");  
         mensajeService.ShowMessage('INPUT_EMPTY','Nombre Rol');
         $scope.valid = 0;
         return;
    }else if($scope.descripcion.length==0){
        $("#nombreRol").css("color","aliceblue");
        $("#descripcionRol").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Rol');
        $scope.valid = 0;
        return;    
    }else if($scope.nombre.length>64){
        $("#nombreRol").css("color","red");
        $("#descripcionRol").css("color","aliceblue");
        mensajeService.ShowMessage('LONG_64','Nombre Rol');
        $scope.valid = 0;
        return;
    }else if($scope.descripcion.length>128){
        $("#nombreRol").css("color","aliceblue");
        $("#descripcionRol").css("color","red");
        mensajeService.ShowMessage('LONG_128','Descripcion Rol');
        $scope.valid = 0;
        return;    
    }else if($scope.symbols.test($scope.nombre)){
        $("#nombreRol").css("color","red");
        $("#descripcionRol").css("color","aliceblue");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Rol');
        $scope.valid = 0;
        return;
    }else if($scope.symbols.test($scope.descripcion)){
        $("#nombreRol").css("color","aliceblue");
        $("#descripcionRol").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descricion Rol');
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
        mensajeService.ShowMessage('SUCCESS_SAVE','Rol');
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
};
}]);
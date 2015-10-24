angular.module('myApp').controller('Creacion_Rol', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
    
    
		   $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
    
$scope.submit = function () {
    
    $scope.valid = 1;
    
     if($scope.nombre.length==0){
         $("#nombreRol").css("background","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Rol');
         return;
    }else if($scope.descripcion.length==0){
        $("#nombreRol").css("background","aliceblue");
        $("#descripcionRol").css("background","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Rol');
        return;    
    }else if($scope.nombre.length>64){
        $("#nombreRol").css("background","red");
        $("#descripcionRol").css("background","aliceblue");
        mensajeService.ShowMessage('LONG_64','Nombre Rol');
        return;
    }else if($scope.descripcion.length>128){
        $("#nombreRol").css("background","aliceblue");
        $("#descripcionRol").css("background","red");
        mensajeService.ShowMessage('LONG_128','Descripcion Rol');
        return;    
    }else if($scope.symbols.test($scope.nombre)){
        $("#nombreRol").css("background","red");
        $("#descripcionRol").css("background","aliceblue");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Rol');
        return;
    }else if($scope.symbols.test($scope.descripcion)){
        $("#nombreRol").css("background","aliceblue");
        $("#descripcionRol").css("background","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descricion Rol');
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
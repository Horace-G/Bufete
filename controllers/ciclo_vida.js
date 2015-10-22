angular.module('myApp').controller('ciclo_vida', ['$scope','$http','$location', function ($scope,$http,$location) {

    $scope.nombre = '';
          $scope.descripcion='';
     $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
	 
$scope.submit = function () {
    
    $scope.valid = 1;
    
    if($scope.nombre.length==0){
         $("#nombreCicloDeVida").css("color","red");
        toastr.error("Nombre no puede ser vacio","Error(1)");
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#nombreCicloDeVida").css("color","aliceblue");
        $("#descripcionCicloDeVida").css("color","red");
        toastr.error("Descripcion no puede ser vacio","error(1)");
        $scope.valid = 0;
        return;     
    }if($scope.nombre.length>64){
        $("#nombreCicloDeVida").css("color","red");
        //$("#descripcionCicloDeVida").css("color","aliceblue");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
       // $("#nombreCicloDeVida").css("color","black");
        $("#descripcionCicloDeVida").css("color","red");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#nombreCicloDeVida").css("color","red");
       // $("#descripcionCicloDeVida").css("color","black");
        toastr.error("(2) se han ingresado caracteres no validos en el nombre");
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.descripcion)){
       // $("#nombreCicloDeVida").css("color","black");
        $("#descripcionCicloDeVida").css("color","red");
        toastr.error("(2) se han ingresado caracteres no validos en la Descripcion");
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
        
        
        
    }if($scope.valid == 1){
        $("#nombreCicloDeVida").css("color","black");
        $("#descripcionCicloDeVida").css("color","black");
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
		 $("#nombreCicloDeVida").css("color","black");
        $("#descripcionCicloDeVida").css("color","black");
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
        
};
}]);
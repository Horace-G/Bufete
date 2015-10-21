angular.module('myApp').controller('ciclo_vida', ['$scope','$http','$location', function ($scope,$http,$location) {

    $scope.nombre = '';
          $scope.descripcion='';
     $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
	 
$scope.submit = function () {
    if($scope.nombre.length==0){
         $("#nombreCicloDeVida").css("background","red");
        toastr.error("Nombre no puede ser vacio","Error(1)");
         return;
    }else if($scope.descripcion.length==0){
        $("#nombreCicloDeVida").css("background","aliceblue");
        $("#descripcionCicloDeVida").css("background","red");
        toastr.error("Descripcion no puede ser vacio","error(1)");
        return;     
    }else if($scope.nombre.length>64){
        $("#nombreCicloDeVida").css("background","red");
        $("#descripcionCicloDeVida").css("background","aliceblue");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        return;
    }else if($scope.descripcion.length>128){
        $("#nombreCicloDeVida").css("background","aliceblue");
        $("#descripcionCicloDeVida").css("background","red");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        return;    
    }else if($scope.symbols.test($scope.nombre)){
        $("#nombreCicloDeVida").css("background","red");
        $("#descripcionCicloDeVida").css("background","aliceblue");
        toastr.error("(2) se han ingresado caracteres no validos en el nombre");
        return;
    }else if($scope.symbols.test($scope.descripcion)){
        $("#nombreCicloDeVida").css("background","aliceblue");
        $("#descripcionCicloDeVida").css("background","red");
        toastr.error("(2) se han ingresado caracteres no validos en la Descripcion");
        return;
    }else{
        $("#nombreCicloDeVida").css("background","aliceblue");
        $("#descripcionCicloDeVida").css("background","aliceblue");
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
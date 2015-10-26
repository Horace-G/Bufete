angular.module('myApp').controller('ciclo_vida', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {

    $scope.nombre = '';
          $scope.descripcion='';
     $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
	 
$scope.submit = function () {
    
    $scope.valid = 1;
    
    if($scope.nombre.length==0){
         $("#nombreCicloDeVida").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Ciclo de Vida');
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#nombreCicloDeVida").css("color","aliceblue");
        $("#descripcionCicloDeVida").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Ciclo de Vida');
        $scope.valid = 0;
        return;     
    }if($scope.nombre.length>64){
        $("#nombreCicloDeVida").css("color","red");
        //$("#descripcionCicloDeVida").css("color","aliceblue");
        mensajeService.ShowMessage('LONG_64','Nombre Ciclo de Vida');
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
       // $("#nombreCicloDeVida").css("color","black");
        $("#descripcionCicloDeVida").css("color","red");
        mensajeService.ShowMessage('LONG_128','Descripcion Ciclo de Vida');
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#nombreCicloDeVida").css("color","red");
       // $("#descripcionCicloDeVida").css("color","black");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Ciclo de Vida');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.descripcion)){
       // $("#nombreCicloDeVida").css("color","black");
        $("#descripcionCicloDeVida").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Ciclo de Vida');
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
    if(response.data.Success=="true"){
		console.log(response.data.success);
        mensajeService.ShowMessage('SUCCESS_SAVE','Ciclo de Vida');
        $("#nombreCicloDeVida").css("color","black");
        $("#descripcionCicloDeVida").css("color","black");
		$scope.nombre = '';
        $scope.descripcion = '';
    }else{
            mensajeService.ShowMessage('FAILED_SAVE','Ciclo de Vida');
    }
	});
    }
          
        
};
}]);
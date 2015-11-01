angular.module('myApp').controller('modificar_ciclo_vida', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {

    
    var ctrl = this;
    $scope.allOptions = [];
    $scope.selectedOption = {};
    ctrl.init = function(){
         var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allEstadoCicloVidaMod';
        var request = {
                method: 'GET',
                url: baseUrl
        };
        $http(request).then(function(response){
            $scope.allOptions = response.data;
        });
    };
    
    $scope.onChangeSelect = function(){
        $scope.nombre = $scope.allOptions[$scope.selectedOption - 1].nombre;
        $scope.descripcion = $scope.allOptions[$scope.selectedOption -1].descripcion
        $scope.estado = $scope.allOptions[$scope.selectedOption - 1].estado;
    };
 
    ctrl.init();
    
    $scope.nombre = '';
          $scope.descripcion='';
     $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
	 
$scope.submit = function () {
    
    $scope.valid = 1;
    
    if($scope.nombre.length==0){
         $("#modificarNombreCicloDeVida").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Ciclo de Vida');
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#modificarNombreCicloDeVida").css("color","aliceblue");
        $("#modificarDescripcionCicloDeVida").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Ciclo de Vida');
        $scope.valid = 0;
        return;     
    }if($scope.nombre.length>64){
        $("#modificarNombreCicloDeVida").css("color","red");
        //$("#modificarDescripcionCicloDeVida").css("color","aliceblue");
        mensajeService.ShowMessage('LONG_64','Nombre Ciclo de Vida');
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
       // $("#modificarNombreCicloDeVida").css("color","black");
        $("#modificarDescripcionCicloDeVida").css("color","red");
        mensajeService.ShowMessage('LONG_128','Descripcion Ciclo de Vida');
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#modificarNombreCicloDeVida").css("color","red");
       // $("#modificarDescripcionCicloDeVida").css("color","black");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Ciclo de Vida');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.descripcion)){
       // $("#modificarNombreCicloDeVida").css("color","black");
        $("#modificarDescripcionCicloDeVida").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Ciclo de Vida');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
        
        
        
    }if($scope.valid == 1){
        $("#modificarNombreCicloDeVida").css("color","black");
        $("#modificarDescripcionCicloDeVida").css("color","black");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveEstadoCicloVida';
var request = {
			method: 'POST',
			url: baseUrl,
			data: {id: $scope.selectedOption,nameEstadoCicloVida: $scope.nombre, descriptionEstadoCicloVida: $scope.descripcion, estadoEstadoCicloVida: $scope.estado}
	};
	
	
$http(request).then(function(response){
    if(response.data.Success=="true"){
		console.log(response.data.success);
        mensajeService.ShowMessage('SUCCESS_SAVE','Ciclo de Vida');
        $("#modificarNombreCicloDeVida").css("color","black");
        $("#modificarDescripcionCicloDeVida").css("color","black");
		$scope.nombre = '';
        $scope.descripcion = '';
    }else{
            mensajeService.ShowMessage('FAILED_SAVE','Ciclo de Vida');
    }
	});
    }
          
        
};
}]);
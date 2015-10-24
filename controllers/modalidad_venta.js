angular.module('myApp').controller('modalidad_venta', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
    $scope.nombre = '';
          $scope.descripcion='';
 $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
		  
$scope.submit = function () {
     $scope.valid = 1;
    
     if($scope.nombre.length==0){
         $("#nombreModalidadDeVenta").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Modalidad Venta');
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#nombreModalidadDeVenta").css("background","aliceblue");
        $("#descripcionModalidadDeVenta").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Modalidad Venta');
        $scope.valid = 0;
        return;     
    }if($scope.nombre.length>64){
        $("#nombreModalidadDeVenta").css("color","red");
      //  $("#descripcionModalidadDeVenta").css("background","aliceblue");
        mensajeService.ShowMessage('LONG_64','Nombre Modalidad Venta');
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
        //$("#nombreModalidadDeVenta").css("background","aliceblue");
        $("#descripcionModalidadDeVenta").css("color","red");
        mensajeService.ShowMessage('LONG_128','Descripcion Modalidad Venta');
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#nombreModalidadDeVenta").css("color","red");
        //$("#descripcionModalidadDeVenta").css("background","aliceblue");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Modalidad Venta');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.descripcion)){
        //$("#nombreModalidadDeVenta").css("background","aliceblue");
        $("#descripcionModalidadDeVenta").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Modalidad Venta');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
    
        
    }if($scope.valid == 1){
        $("#nombreModalidadDeVenta").css("color","black");
        $("#descripcionModalidadDeVenta").css("color","black");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveModalidadVenta';
var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameModalidadVenta: $scope.nombre, descriptionModalidadVenta: $scope.descripcion, userModalidadVenta: '1234', estadoModalidadVenta: '1'}
	};
	$http(request).then(function(response){
		console.log(response.data.success);
        mensajeService.ShowMessage('SUCCESS_SAVE','Modalidad Venta');
		 $("#nombreModalidadDeVenta").css("color","black");
        $("#descripcionModalidadDeVenta").css("color","black");
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
};
}]);
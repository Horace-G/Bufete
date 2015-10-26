angular.module('myApp').controller('forma_farmaceutica', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {

 
$scope.nombre = '';
$scope.descripcion = '';
$scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");    
$scope.submit = function () {
    
    $scope.valid = 1;
    
     if($scope.nombre.length==0){
         $("#nombreFormaFarmaceutica").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Froma Farmaceutica');
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionFormaFarmaceutica").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Forma Farmaceutica');
        $scope.valid = 0;
        return;       
    }if($scope.nombre.length>64){
        $("#nombreFormaFarmaceutica").css("color","red");
        //$("#descripcionPresentacionComercial").css("background","aliceblue");
        mensajeService.ShowMessage('LONG_64','Nombre Forma Farmaceutica');
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
        //$("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionFormaFarmaceutica").css("color","red");
        mensajeService.ShowMessage('LONG_128','Descripcion Forma Farmaceutica');
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#nombreFormaFarmaceutica").css("color","red");
       // $("#descripcionPresentacionComercial").css("background","aliceblue");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Forma Farmaceutica');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.descripcion)){
        //$("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionFormaFarmaceutica").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Forma Farmaceutica');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
    
        
    }if($scope.valid == 1){
        $("#nombreFormaFarmaceutica").css("color","black");
        $("#descripcionFormaFarmaceutica").css("color","black");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveFormaFarmaceutica';
		console.log(baseUrl);
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameFormaFarmaceutica: $scope.nombre, descriptionFormaFarmaceutica: $scope.descripcion, userFormaFarmaceutica: '1234', estadoFormaFarmaceutica: '1'}
	};
	$http(request).then(function(response){
        if(response.data.Success=="true"){
            console.log(response.data.Success);
            mensajeService.ShowMessage('SUCCESS_SAVE','Forma Farmaceutica');
             $("#nombrePresentacionComercial").css("color","black");
            $("#descripcionPresentacionComercial").css("color","black");
            $scope.nombre = '';
            $scope.descripcion = '';
        }else{
            mensajeService.ShowMessage('FAILED_SAVE','Forma Farmaceutica');
        }
	});
    }


};
}]);
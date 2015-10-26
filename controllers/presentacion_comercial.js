angular.module('myApp').controller('presentacion_comercial', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {

 
$scope.nombre = '';
$scope.descripcion = '';
$scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");    
$scope.submit = function () {
    
    $scope.valid = 1;
    
     if($scope.nombre.length==0){
         $("#nombrePresentacionComercial").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre');
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionPresentacionComercial").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion');
        $scope.valid = 0;
        return;       
    }if($scope.nombre.length>64){
        $("#nombrePresentacionComercial").css("color","red");
        //$("#descripcionPresentacionComercial").css("background","aliceblue");
        mensajeService.ShowMessage('LONG_64','Nombre');
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
        //$("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionPresentacionComercial").css("color","red");
        mensajeService.ShowMessage('LONG_128','Descripcion');
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#nombrePresentacionComercial").css("color","red");
       // $("#descripcionPresentacionComercial").css("background","aliceblue");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.descripcion)){
        //$("#nombrePresentacionComercial").css("background","aliceblue");
        $("#descripcionPresentacionComercial").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
    
        
    }if($scope.valid == 1){
        $("#nombrePresentacionComercial").css("color","black");
        $("#descripcionPresentacionComercial").css("color","black");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/savePresentacionComercial';
		console.log(baseUrl);
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {namePresentacionComercial: $scope.nombre, descriptionPresentacionComercial: $scope.descripcion, userPresentacionComercial: '1234', estadoPresentacionComercial: '1'}
	};
	$http(request).then(function(response){
        if(response.data.success){
            console.log(response.data.success);
            mensajeService.ShowMessage('SUCCESS_SAVE','Presentacion Comercial');
             $("#nombrePresentacionComercial").css("color","black");
            $("#descripcionPresentacionComercial").css("color","black");
            $scope.nombre = '';
            $scope.descripcion = '';
        }else{
            
        }
	});
    }


};
}]);
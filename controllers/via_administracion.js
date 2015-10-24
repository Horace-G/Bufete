angular.module('myApp').controller('via_administracion', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {

    $scope.nombre = '';
          $scope.descripcion='';
     $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
	
$scope.submit = function () {
     if($scope.nombre.length==0){
         $("#nombreViaAdministracion").css("background","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Via Administracion');
         return;
    }else if($scope.descripcion.length==0){
        $("#nombreViaAdministracion").css("background","aliceblue");
        $("#descripcionViaAdministracion").css("background","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Via Administracion');
        return;     
    }else if($scope.nombre.length>64){
        $("#nombreViaAdministracion").css("background","red");
        $("#descripcionViaAdministracion").css("background","aliceblue");
        mensajeService.ShowMessage('LONG_64','Nombre Via Administracion');
        return;
    }else if($scope.descripcion.length>128){
        $("#nombreViaAdministracion").css("background","aliceblue");
        $("#descripcionViaAdministracion").css("background","red");
        mensajeService.ShowMessage('LONG_128','Descripcion Via Administracion');
        return;    
    }else if($scope.symbols.test($scope.nombre)){
        $("#nombreViaAdministracion").css("background","red");
        $("#descripcionViaAdministracion").css("background","aliceblue");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Via Administracion');
        return;
    }else if($scope.symbols.test($scope.descripcion)){
        $("#nombreViaAdministracion").css("background","aliceblue");
        $("#descripcionViaAdministracion").css("background","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Via Administracion');
        return;
    }else{
        $("#nombreViaAdministracion").css("background","aliceblue");
        $("#descripcionViaAdministracion").css("background","aliceblue");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveViaAdministracion';
var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameViaAdministracion: $scope.nombre, descriptionViaAdministracion: $scope.descripcion, userViaAdministracion: '1234', estadoViaAdministracion: '1'}
	};
	
	    	$http(request).then(function(response){
        mensajeService.ShowMessage('SUCCESS_SAVE','Via Administracion');
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
};
}]);
angular.module('myApp').controller('via_administracion', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {

    $scope.nombre = '';
          $scope.descripcion='';
     $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
	
$scope.submit = function () {
     if($scope.nombre.length==0){
         $("#nombreViaAdministracion").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Via Administracion');
         return;
    }else if($scope.descripcion.length==0){
       // $("#nombreViaAdministracion").css("color","black");
        $("#descripcionViaAdministracion").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Via Administracion');
        return;     
    }else if($scope.nombre.length>64){
        $("#nombreViaAdministracion").css("colo","red");
       // $("#descripcionViaAdministracion").css("color","black");
        mensajeService.ShowMessage('LONG_64','Nombre Via Administracion');
        return;
    }else if($scope.descripcion.length>128){
       // $("#nombreViaAdministracion").css("color","black");
        $("#descripcionViaAdministracion").css("color","red");
        mensajeService.ShowMessage('LONG_128','Descripcion Via Administracion');
        return;    
    }else if($scope.symbols.test($scope.nombre)){
        $("#nombreViaAdministracion").css("color","red");
        //$("#descripcionViaAdministracion").css("color","black");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Via Administracion');
        return;
    }else if($scope.symbols.test($scope.descripcion)){
       // $("#nombreViaAdministracion").css("color","black");
        $("#descripcionViaAdministracion").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Via Administracion');
        return;
    }else{
        $("#nombreViaAdministracion").css("color","black");
        $("#descripcionViaAdministracion").css("color","black");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveViaAdministracion';
var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameViaAdministracion: $scope.nombre, descriptionViaAdministracion: $scope.descripcion, userViaAdministracion: '1234', estadoViaAdministracion: '1'}
	};
	  
        
	    	      $http(request).then(function(response){
                       if(response.data.Success=="true"){
                            mensajeService.ShowMessage('SUCCESS_SAVE','Via Administracion');
                            $scope.nombre = '';
                            $scope.descripcion = '';
                       }else{
                           mensajeService.ShowMessage('FAILED_SAVE','Via Administracion');
                       }
	});
    }
          
};
}]);
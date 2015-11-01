angular.module('myApp').controller('modificar_via_administracion', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {

     var ctrl = this;
    $scope.allPresentacion = [];
    $scope.selectedOption = {};
    ctrl.init = function(){
         var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allViaAdministracionMod';
        var request = {
                method: 'GET',
                url: baseUrl
        };
        $http(request).then(function(response){
            $scope.allPresentacion = response.data;
        });
    };
    
    $scope.onChangeSelect = function(){
        console.log($scope.selectedOption);
    };
 
    ctrl.init();
    
    $scope.nombre = '';
          $scope.descripcion='';
     $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
	
$scope.submit = function () {
     if($scope.nombre.length==0){
         $("#modificarNombreViaAdministracion").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Via Administracion');
         return;
    }else if($scope.descripcion.length==0){
       // $("#modificarNombreViaAdministracion").css("color","black");
        $("#modificarDescripcionViaAdministracion").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Via Administracion');
        return;     
    }else if($scope.nombre.length>64){
        $("#modificarNombreViaAdministracion").css("colo","red");
       // $("#modificarDescripcionViaAdministracion").css("color","black");
        mensajeService.ShowMessage('LONG_64','Nombre Via Administracion');
        return;
    }else if($scope.descripcion.length>128){
       // $("#modificarNombreViaAdministracion").css("color","black");
        $("#modificarDescripcionViaAdministracion").css("color","red");
        mensajeService.ShowMessage('LONG_128','Descripcion Via Administracion');
        return;    
    }else if($scope.symbols.test($scope.nombre)){
        $("#modificarNombreViaAdministracion").css("color","red");
        //$("#modificarDescripcionViaAdministracion").css("color","black");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Via Administracion');
        return;
    }else if($scope.symbols.test($scope.descripcion)){
       // $("#modificarNombreViaAdministracion").css("color","black");
        $("#modificarDescripcionViaAdministracion").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Via Administracion');
        return;
    }else{
        $("#modificarNombreViaAdministracion").css("color","black");
        $("#modificarDescripcionViaAdministracion").css("color","black");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/updateViaAdministracion';
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
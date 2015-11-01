angular.module('myApp').controller('modificar_presentacion_comercial', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {

    var ctrl = this;
    $scope.allPresentacion = [];
    $scope.selectedOption = {};
    ctrl.init = function(){
         var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allPresentacionComercialMod';
        var request = {
                method: 'GET',
                url: baseUrl
        };
        $http(request).then(function(response){
            $scope.allPresentacion = response.data;
            $('select').material_select();
        });
        
    };
    
    $scope.onChangeSelect = function(){
        $scope.nombre = $scope.allPresentacion[selectedOption - 1].nombre;
        $scope.descripcion = $scope.allPresentacion[selectedOption -1].descripcion
        $scope.estado = $scope.allPresentacion[selectedOption - 1].estado;
    };
 
    ctrl.init();
    
$scope.nombre = '';
$scope.descripcion = '';
$scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");    
$scope.submit = function () {
    
    $scope.valid = 1;
    
     if($scope.nombre.length==0){
         $("#modificarNombrePresentacionComercial").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Presentacion Comercial');
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#nombrePresentacionComercial").css("background","aliceblue");
        $("#modificarDescripcionPresentacionComercial").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Presentacion Comercial');
        $scope.valid = 0;
        return;       
    }if($scope.nombre.length>64){
        $("#modificarNombrePresentacionComercial").css("color","red");
        //$("#descripcionPresentacionComercial").css("background","aliceblue");
        mensajeService.ShowMessage('LONG_64','Nombre Presentacion Comercial');
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
        //$("#nombrePresentacionComercial").css("background","aliceblue");
        $("#modificarDescripcionPresentacionComercial").css("color","red");
        mensajeService.ShowMessage('LONG_128','Descripcion Presentacion Comercial');
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#modificarNombrePresentacionComercial").css("color","red");
       // $("#descripcionPresentacionComercial").css("background","aliceblue");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Presentacion Comercial');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.descripcion)){
        //$("#nombrePresentacionComercial").css("background","aliceblue");
        $("#modificarDescripcionPresentacionComercial").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Presentacion Comercial');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
    
        
    }if($scope.valid == 1){
        $("#modificarNombrePresentacionComercial").css("color","black");
        $("#modificarDescripcionPresentacionComercial").css("color","black");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/updatePresentacionComercial';
		console.log(baseUrl);
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {namePresentacionComercial: $scope.nombre, descriptionPresentacionComercial: $scope.descripcion, estadoPresentacionComercial: $scope.estado}
	};
       
	$http(request).then(function(response){
        
        if(response.data.Success=="true"){
            console.log(response.data.success);
            mensajeService.ShowMessage('SUCCESS_SAVE','Presentacion Comercial');
             $("#modificarNombrePresentacionComercial").css("color","black");
            $("#modificarDescripcionPresentacionComercial").css("color","black");
            $scope.nombre = '';
            $scope.descripcion = '';
        }else{
            mensajeService.ShowMessage('FAILED_SAVE','Presentacion Comercial');
        }
	});
    }


};
}]);
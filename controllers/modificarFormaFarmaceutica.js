angular.module('myApp').controller('modificar_forma_farmaceutica', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
  var ctrl = this;
    $scope.allOptions = [];
    $scope.selectedOption = {};
    ctrl.init = function(){
         var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allFormaFarmaceuticaMod';
        var request = {
                method: 'GET',
                url: baseUrl
        };
        $http(request).then(function(response){
            $scope.allOptions = response.data;
        });
    };
    
    $scope.onChangeSelect = function(){
        $scope.nombre = $scope.allOptions[selectedOption - 1].nombre;
        $scope.descripcion = $scope.allOptions[selectedOption -1].descripcion
        $scope.estado = $scope.allOptions[selectedOption - 1].estado;
    };
 
    ctrl.init();
 
$scope.nombre = '';
$scope.descripcion = '';
$scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");    
$scope.submit = function () {
    
    $scope.valid = 1;
    
     if($scope.nombre.length==0){
         $("#modificarNombreFormaFarmaceutica").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Froma Farmaceutica');
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#modificarNombrePresentacionComercial").css("background","aliceblue");
        $("#modificarDescripcionFormaFarmaceutica").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Forma Farmaceutica');
        $scope.valid = 0;
        return;       
    }if($scope.nombre.length>64){
        $("#modificarNombreFormaFarmaceutica").css("color","red");
        //$("#modificarDescripcionPresentacionComercial").css("background","aliceblue");
        mensajeService.ShowMessage('LONG_64','Nombre Forma Farmaceutica');
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
        //$("#modificarNombrePresentacionComercial").css("background","aliceblue");
        $("#modificarDescripcionFormaFarmaceutica").css("color","red");
        mensajeService.ShowMessage('LONG_128','Descripcion Forma Farmaceutica');
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#modificarNombreFormaFarmaceutica").css("color","red");
       // $("#modificarDescripcionPresentacionComercial").css("background","aliceblue");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Forma Farmaceutica');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.descripcion)){
        //$("#modificarNombrePresentacionComercial").css("background","aliceblue");
        $("#modificarDescripcionFormaFarmaceutica").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Forma Farmaceutica');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
    
        
    }if($scope.valid == 1){
        $("#modificarNombreFormaFarmaceutica").css("color","black");
        $("#modificarDescripcionFormaFarmaceutica").css("color","black");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/updateFormaFarmaceutica';
		console.log(baseUrl);
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameFormaFarmaceutica: $scope.nombre, descriptionFormaFarmaceutica: $scope.descripcion, estadoFormaFarmaceutica: $scope.estado}
	};
	$http(request).then(function(response){
        if(response.data.Success=="true"){
            console.log(response.data.Success);
            mensajeService.ShowMessage('SUCCESS_SAVE','Forma Farmaceutica');
            $("#modificarNombreFormaFarmaceutica").css("color","black");
            $("#modificarDescripcionFormaFarmaceutica").css("color","black");
            $scope.nombre = '';
            $scope.descripcion = '';
        }else{
            mensajeService.ShowMessage('FAILED_SAVE','Forma Farmaceutica');
        }
	});
    }


};
}]);
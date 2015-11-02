angular.module('myApp').controller('modificar_modalidad_venta', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
    var ctrl = this;
    $scope.allOptions = [];
    $scope.selectedOption = {};
    ctrl.init = function(){
         var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allModalidadVentaMod';
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
        if($scope.allOptions[$scope.selectedOption - 1].estado==1){
                document.getElementById("estadoModalidad").checked = true;
        }else{
                document.getElementById("estadoModalidad").checked = false;
        }
    };
 
    ctrl.init();
    
    $scope.nombre = '';
          $scope.descripcion='';
 $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
		  
$scope.submit = function () {
     $scope.valid = 1;
    
     if($scope.nombre.length==0){
         $("#modificarNombreModalidadDeVenta").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Modalidad Venta');
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#modificarNombreModalidadDeVenta").css("background","aliceblue");
        $("#modificarDescripcionModalidadDeVenta").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Modalidad Venta');
        $scope.valid = 0;
        return;     
    }if($scope.nombre.length>64){
        $("#modificarNombreModalidadDeVenta").css("color","red");
      //  $("#modificarDescripcionModalidadDeVenta").css("background","aliceblue");
        mensajeService.ShowMessage('LONG_64','Nombre Modalidad Venta');
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
        //$("#modificarNombreModalidadDeVenta").css("background","aliceblue");
        $("#modificarDescripcionModalidadDeVenta").css("color","red");
        mensajeService.ShowMessage('LONG_128','Descripcion Modalidad Venta');
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#modificarNombreModalidadDeVenta").css("color","red");
        //$("#modificarDescripcionModalidadDeVenta").css("background","aliceblue");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Modalidad Venta');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.descripcion)){
        //$("#modificarNombreModalidadDeVenta").css("background","aliceblue");
        $("#modificarDescripcionModalidadDeVenta").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Modalidad Venta');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
    
        
    }if($scope.valid == 1){
        $("#modificarNombreModalidadDeVenta").css("color","black");
        $("#modificarDescripcionModalidadDeVenta").css("color","black");
        var path = $location.path($location.path());
        var estado;
        if(document.getElementById("estadoModalidad").checked == true){
            estado = 1;
        }else{
            estado = 0;
        }

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/updateModalidadVenta';
var request = {
			method: 'POST',
			url: baseUrl,
			data: {idModalidadVenta: $scope.selectedOption,nameModalidadVenta: $scope.nombre, descriptionModalidadVenta: $scope.descripcion, estadoModalidadVenta: estado}
	};
	$http(request).then(function(response){
        if(response.data.Success=="true"){
            console.log(response.data.success);
            mensajeService.ShowMessage('SUCCESS_SAVE','Modalidad Venta');
            $("#modificarNombreModalidadDeVenta").css("color","black");
            $("#modificarDescripcionModalidadDeVenta").css("color","black");
            $scope.nombre = '';
            $scope.descripcion = '';
            var path = $location.path($location.path());
            var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allModalidadVentaMod';
            var request = {
                    method: 'GET',
                    url: baseUrl
            };
            $http(request).then(function(response){
                $scope.allOptions = response.data;
            });
        }else{
            mensajeService.ShowMessage('FAILED_SAVE','Modalidad Venta');
        }
        });
    }
          
};
}]);
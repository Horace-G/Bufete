angular.module('myApp').controller('modificar_categoria', ['$scope','$http','$location','mensajeService',function ($scope,$http,$location,mensajeService) {
 
    var ctrl = this;
    $scope.allPresentacion = [];
    $scope.selectedOption = {};
    ctrl.init = function(){
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allCategoriaMod';
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
    
    $scope.valid = 1;
    
    if($scope.nombre.length==0){
        $("#modificarNombreCategoria").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Categoria');
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#modificarNombreCategoria").css("background","aliceblue");
        $("#modificarDescripcionCategoria").css("color","red");
         mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Categoria');
        $scope.valid = 0;
        return;
    }if($scope.nombre.length>64){
        $("#modificarNombreCategoria").css("color","red");
      //  $("#modificarDescripcionCategoria").css("background","aliceblue");
         mensajeService.ShowMessage('LONG_64','Nombre Categoria');
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
      //  $("#modificarNombreCategoria").css("background","aliceblue");
        $("#modificarDescripcionCategoria").css("color","red");
         mensajeService.ShowMessage('LONG_128','Nombre Categoria');
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#modificarNombreCategoria").css("color","red");
       // $("#modificarDescripcionCategoria").css("background","aliceblue");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Categoria');
        
        $scope.valid = 0;
        return;
    }else if($scope.symbols.test($scope.descripcion)){
        //$("#modificarNombreCategoria").css("background","aliceblue");
        $("#modificarDescripcionCategoria").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Categoria');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
        
        
    }if($scope.valid == 1){
        $("#modificarNombreCategoria").css("color","black");
        $("#modificarDescripcionCategoria").css("color","black");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/updateCategoriaMedicamento';
        
var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameCategoriaMedicamento: $scope.nombre, descriptionCategoriaMedicamento: $scope.descripcion, userCategoriaMedicamento: '1234', estadoCategoriaMedicamento: '1'}
	};
	
	$http(request).then(function(response){
        if(response.data.Success=="true"){
		mensajeService.ShowMessage('SUCCESS_SAVE','Categoria');
		$("#modificarNombreCategoria").css("color","black");
        $("#modificarDescripcionCategoria").css("color","black");
		$scope.nombre = '';
        $scope.descripcion = '';
        }else{
        mensajeService.ShowMessage('FAILED_SAVE','Categoria');
        }
	});
         
 }
};
}]);
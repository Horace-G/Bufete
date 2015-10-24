angular.module('myApp').controller('categoria', ['$scope','$http','$location','mensajeService',function ($scope,$http,$location,mensajeService) {
 
    $scope.nombre = '';
          $scope.descripcion='';
		   $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
    
$scope.submit = function () {
    
    $scope.valid = 1;
    
    if($scope.nombre.length==0){
        $("#nombreCategoria").css("color","red");
        mensajeService.ShowMessage('INPUT_EMPTY','Nombre Categoria');
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#nombreCategoria").css("background","aliceblue");
        $("#descripcionCategoria").css("color","red");
         mensajeService.ShowMessage('INPUT_EMPTY','Descripcion Categoria');
        $scope.valid = 0;
        return;
    }if($scope.nombre.length>64){
        $("#nombreCategoria").css("color","red");
      //  $("#descripcionCategoria").css("background","aliceblue");
         mensajeService.ShowMessage('LONG_64','Nombre Categoria');
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
      //  $("#nombreCategoria").css("background","aliceblue");
        $("#descripcionCategoria").css("color","red");
         mensajeService.ShowMessage('LONG_128','Nombre Categoria');
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#nombreCategoria").css("color","red");
       // $("#descripcionCategoria").css("background","aliceblue");
        mensajeService.ShowMessage('INVALID_CHAR','Nombre Categoria');
        
        $scope.valid = 0;
        return;
    }else if($scope.symbols.test($scope.descripcion)){
        //$("#nombreCategoria").css("background","aliceblue");
        $("#descripcionCategoria").css("color","red");
        mensajeService.ShowMessage('INVALID_CHAR','Descripcion Categoria');
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
        
        
    }if($scope.valid == 1){
        $("#nombreCategoria").css("color","black");
        $("#descripcionCategoria").css("color","black");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveCategoriaMedicamento';
        
var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameCategoriaMedicamento: $scope.nombre, descriptionCategoriaMedicamento: $scope.descripcion, userCategoriaMedicamento: '1234', estadoCategoriaMedicamento: '1'}
	};
	
	$http(request).then(function(response){
		mensajeService.ShowMessage('SUCCESS_SAVE','Categoria');
		$("#nombreCategoria").css("color","black");
        $("#descripcionCategoria").css("color","black");
		$scope.nombre = '';
$scope.descripcion = '';
	});
         
 }
};
}]);
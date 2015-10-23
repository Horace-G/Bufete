angular.module('myApp').controller('categoria', ['$scope','$http','$location',function ($scope,$http,$location) {
 
    $scope.nombre = '';
          $scope.descripcion='';
		   $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
    
$scope.submit = function () {
    
    $scope.valid = 1;
    
    if($scope.nombre.length==0){
        $("#nombreCategoria").css("color","red");
        toastr.error("Nombre no puede ser vacio","Error(1)");
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#nombreCategoria").css("background","aliceblue");
        $("#descripcionCategoria").css("color","red");
        toastr.error("Descripcion no puede ser vacio","error(1)");
        $scope.valid = 0;
        return;
    }if($scope.nombre.length>64){
        $("#nombreCategoria").css("color","red");
      //  $("#descripcionCategoria").css("background","aliceblue");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
      //  $("#nombreCategoria").css("background","aliceblue");
        $("#descripcionCategoria").css("color","red");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#nombreCategoria").css("color","red");
       // $("#descripcionCategoria").css("background","aliceblue");
        toastr.error("(2) se han ingresado caracteres no validos en el nombre");
        $scope.valid = 0;
        return;
    }else if($scope.symbols.test($scope.descripcion)){
        //$("#nombreCategoria").css("background","aliceblue");
        $("#descripcionCategoria").css("color","red");
        toastr.error("(2) se han ingresado caracteres no validos en la Descripcion");
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
		toastr.success("Se Agrego","Se Agrego la categoria correctamente");
		$("#nombreCategoria").css("color","black");
        $("#descripcionCategoria").css("color","black");
		$scope.nombre = '';
$scope.descripcion = '';
	});
         
 }
};
}]);
angular.module('myApp').controller('modalidad_venta', ['$scope','$http','$location', function ($scope,$http,$location) {
    $scope.nombre = '';
          $scope.descripcion='';
 $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
		  
$scope.submit = function () {
     $scope.valid = 1;
    
     if($scope.nombre.length==0){
         $("#nombreModalidadDeVenta").css("color","red");
        toastr.error("Nombre no puede ser vacio","Error(1)");
        $scope.valid = 0;
         return;
    }if($scope.descripcion.length==0){
       // $("#nombreModalidadDeVenta").css("background","aliceblue");
        $("#descripcionModalidadDeVenta").css("color","red");
        toastr.error("Descripcion no puede ser vacio","error(1)");
        $scope.valid = 0;
        return;     
    }if($scope.nombre.length>64){
        $("#nombreModalidadDeVenta").css("color","red");
      //  $("#descripcionModalidadDeVenta").css("background","aliceblue");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        $scope.valid = 0;
        return;
    }if($scope.descripcion.length>128){
        //$("#nombreModalidadDeVenta").css("background","aliceblue");
        $("#descripcionModalidadDeVenta").css("color","red");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        $scope.valid = 0;
        return;    
    }if($scope.symbols.test($scope.nombre)){
        $("#nombreModalidadDeVenta").css("color","red");
        //$("#descripcionModalidadDeVenta").css("background","aliceblue");
        toastr.error("(2) se han ingresado caracteres no validos en el nombre");
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.descripcion)){
        //$("#nombreModalidadDeVenta").css("background","aliceblue");
        $("#descripcionModalidadDeVenta").css("color","red");
        toastr.error("(2) se han ingresado caracteres no validos en la Descripcion");
        $scope.valid = 0;
        return;
    }if($scope.symbols.test($scope.nombre) && $scope.symbols.test($scope.descripcion)){
    
        
    }if($scope.valid == 1){
        $("#nombreModalidadDeVenta").css("color","black");
        $("#descripcionModalidadDeVenta").css("color","black");
        var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveModalidadVenta';
var request = {
			method: 'POST',
			url: baseUrl,
			data: {nameModalidadVenta: $scope.nombre, descriptionModalidadVenta: $scope.descripcion, userModalidadVenta: '1234', estadoModalidadVenta: '1'}
	};
	$http(request).then(function(response){
		console.log(response.data.success);
		toastr.success("Se Agrego la modalidad de venta correctamente");
		 $("#nombreModalidadDeVenta").css("color","black");
        $("#descripcionModalidadDeVenta").css("color","black");
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
};
}]);
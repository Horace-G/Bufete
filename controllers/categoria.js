angular.module('myApp').controller('categoria', ['$scope','$http','$location',function ($scope,$http,$location) {
 
    $scope.nombre = '';
          $scope.descripcion='';
		   $scope.symbols = new RegExp("[<>%\$!@#%^&*()_+]");
    
$scope.submit = function () {
    if($scope.nombre.length==0){
        $("#nombreCategoria").css("background","red");
        toastr.error("Nombre no puede ser vacio","Error(1)");
         return;
    }else if($scope.descripcion.length==0){
        $("#nombreCategoria").css("background","aliceblue");
        $("#descripcionCategoria").css("background","red");
        toastr.error("Descripcion no puede ser vacio","error(1)");
        return;
    }else if($scope.nombre.length>64){
        $("#nombreCategoria").css("background","red");
        $("#descripcionCategoria").css("background","aliceblue");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        return;
    }else if($scope.descripcion.length>128){
        $("#nombreCategoria").css("background","aliceblue");
        $("#descripcionCategoria").css("background","red");
        toastr.error("ha exedido del tamaño maximo","Error(1)");
        return;    
    }else if($scope.symbols.test($scope.nombre)){
        $("#nombreCategoria").css("background","red");
        $("#descripcionCategoria").css("background","aliceblue");
        toastr.error("(2) se han ingresado caracteres no validos en el nombre");
        return;
    }else if($scope.symbols.test($scope.descripcion)){
        $("#nombreCategoria").css("background","aliceblue");
        $("#descripcionCategoria").css("background","red");
        toastr.error("(2) se han ingresado caracteres no validos en la Descripcion");
        return;
    }else{
        $("#nombreCategoria").css("background","aliceblue");
        $("#descripcionCategoria").css("background","aliceblue");
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
		$scope.nombre = '';
$scope.descripcion = '';
	});
         
 }
};
}]);
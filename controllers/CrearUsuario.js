angular.module('myApp').controller('crear_usuario', ['$scope','$http','$location','mensajeService','rolService', function ($scope,$http,$location,mensajeService,rolService) {
toastr("error","shut");



$scope.submitGuardar = function () {
    
    $scope.valid = 1;
    
     if($scope.valid == 1){
        
        var path = $location.path($location.path());
        //
        
        
		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveUsuario';
		console.log(baseUrl);
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {}
	};
    toastr.error('ERROR!','Guardado');
	$http(request).then(function(response){
        if(response.data.success.equals("true")){
            console.log(response.data.success);
            
        }else{
            mensajeService.ShowMessage('FAILED_SAVE','Usuario');
        }
	});
    }


};
}]);

angular.module('myApp').controller('mainController', ['$scope', '$log','$http','$location','$stateParams', function($scope, $log,$http,$location,$stateParams) {

    
    var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allMensaje';
        var request = {
			method: 'GET',
			url: baseUrl
	   };
	   $http(request).then(function(response){

		  console.log(response.data);
		  
		  $stateParams.Mensajes = response.data;
	   });
    
    $scope.name = 'Main';
    
}]);
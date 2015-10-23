
angular.module('myApp').controller('mainController', ['$scope', '$log','$http','$location', function($scope, $log,$http,$location) {

    
    var path = $location.path($location.path());

		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allMensaje';
        var request = {
			method: 'GET',
			url: baseUrl
	   };
	   $http(request).then(function(response){

		  console.log(response.data);
		  
		  
	   });
    
    $scope.name = 'Main';
    
}]);

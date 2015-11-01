angular.module('myApp').controller('mainController', ['$scope', '$log','$http','$location','mensajeService', function($scope, $log,$http,$location,mensajeService) {
    $scope.name = 'Main';
    var ctrl = this;
    
    ctrl.init = function(){
        mensajeService.getMensaje();
    };
    
    $scope.logout = function(){
        var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port +'/Bufete/logout';
        var redirectUrl = path.$$protocol+"://"+path.$$host+":"+path.$$port+"/Bufete";
	var request = {
                method: 'POST',
                url: baseUrl,
                data: {}
        };	
        $http(request).then(function(response){
		window.location.replace(redirectUrl);	           
        });
    };
    ctrl.init();
}]);

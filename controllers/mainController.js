angular.module('myApp').controller('mainController', ['$scope', '$log','$http','$location','mensajeService', function($scope, $log,$http,$location,mensajeService) {
    $scope.name = 'Main';
    var ctrl = this;
    
    ctrl.init = function(){
        mensajeService.getMensaje();
    };
    
    $scope.logout = function(){
        var request = {
            var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port +'/Bufete/logout';
            var request = {
                method: 'POST',
                url: baseUrl,
                data: {}
            };
        }
	
        $http(request).then(function(response){
            
        });
    }
    ctrl.init();
}]);

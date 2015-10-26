angular.module('myApp').controller('mainController', ['$scope', '$log','$http','$location','mensajeService', function($scope, $log,$http,$location,mensajeService) {
    $scope.name = 'Main';
    var ctrl = this;
    
    ctrl.init = function(){
        mensajeService.getMensaje();
    };
    
    ctrl.init();
}]);

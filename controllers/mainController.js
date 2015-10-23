angular.module('myApp').controller('mainController', ['$scope', '$log','$http','$location','mensajeService', function($scope, $log,$http,$location,mensajeService) {
    $scope.name = 'Main';
    mensajeService.getMensaje();
    console.log(mensaje.Mensaje());
    
}]);

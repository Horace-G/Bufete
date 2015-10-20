angular.module('myApp').controller('secondController', ['$scope', '$log', '$routeParams','$http', function($scope, $log, $routeParams,$http) {
    
    $scope.num = $routeParams.num || 1;
    
}]);
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/medicamentos.html',
        controller: 'mainController'
    })
    
    .when('/medicamentos', {
        templateUrl: 'views/medicamentos.html',
        controller: 'secondController'
    })
    
    .when('/configuracion', {
        templateUrl: 'views/configuracion.html',
        controller: 'mainController'
    })
    
    .when('/second/:num', {
        templateUrl: 'views/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.num = $routeParams.num || 1;
    
}]);

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'public/views/home.html',
        controller: 'mainController'
    })
    
    .when('/medicamentos', {
        templateUrl: 'public/views/configuracion.html',
        controller: 'secondController'
    })
    
     .when('/configuracion', {
        templateUrl: 'public/views/configuracion.html',
        controller: 'mainController'
    })
    
     .when('/crearExpediente', {
        templateUrl: 'public/views/crearExpediente.html',
        controller: 'mainController'
    })
    
     .when('/reportes', {
        templateUrl: 'public/views/reportes.html',
        controller: 'secondController'
    })
    
    .when('/usuarios', {
        templateUrl: 'public/views/usuarios.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'public/views/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams','$http', function($scope, $log, $routeParams,$http) {
    
	var request = {
			method: 'POST',
			url: "http://fia.unitec.edu:8082/Bufete/savePresentacionComercial",
			data: {namePresentacionComercial: 'Hola'}
	};
	$http(request).then(function(response){
		alert('OH');
		console.log(response);
	});
    $scope.num = $routeParams.num || 1;
    
}]);

myApp.directive('buffetNav', [function() {
  return {
      templateUrl : 'public/buffetnavbar.html'
  }
}]);

myApp.directive('medicamentosMenu', [function() {
  return {
      templateUrl : 'public/views/medicamentos.html'
  }
}]);

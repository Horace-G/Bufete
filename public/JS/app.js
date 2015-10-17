var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    })
    
    .when('/medicamentos', {
        templateUrl: 'views/configuracion.html',
        controller: 'secondController'
    })
    
     .when('/configuracion', {
        templateUrl: 'views/configuracion.html',
        controller: 'mainController'
    })
    
     .when('/crearExpediente', {
        templateUrl: 'views/crearExpediente.html',
        controller: 'mainController'
    })
    
     .when('/reportes', {
        templateUrl: 'views/reportes.html',
        controller: 'secondController'
    })
    
    .when('/usuarios', {
        templateUrl: 'views/usuarios.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'views/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams','$http', function($scope, $log, $routeParams,$http) {
    
	var request = {
			method: 'POST',
			url: "http://fia.unitec.edu:8082/Bufete/public/index.php/TestPOST"
	};
	$http(request).then(function(response){
		alert('OH');
		alert(response);
	});
    $scope.num = $routeParams.num || 1;
    
}]);

myApp.directive('buffetNav', [function() {
  return {
      templateUrl : 'buffetnavbar.html'
  }
}]);

myApp.directive('medicamentosMenu', [function() {
  return {
      templateUrl : 'views/medicamentos.html'
  }
}]);

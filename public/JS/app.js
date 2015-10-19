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
			url: "http://127.0.0.1/Bufete/index.php/savePresentacionComercial",
			data: {namePresentacionComercial: 'Hola'}
	};
	$http(request).then(function(response){
		alert('OH');
		console.log(response);
	});
    $scope.num = $routeParams.num || 1;
    
}]);


myApp.controller('presentacion_comercial', ['$scope', function ($scope) {

$scope.submit = function () {


alert('Presentacion Comercial');


};
}]);
myApp.controller('modalidad_venta', ['$scope', function ($scope) {

$scope.submit = function () {


alert('Modalidad Venta');


};
}]);
myApp.controller('categoria', ['$scope', function ($scope) {

$scope.submit = function () {


alert('Categoria');


};
}]);
myApp.controller('ciclo_vida', ['$scope', function ($scope) {

$scope.submit = function () {


alert('Ciclo de Vida');


};
}]);
myApp.controller('via_administracion', ['$scope', function ($scope) {

$scope.submit = function () {


alert('via administracion');


};
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

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
    .when('/crearRol', {
        templateUrl: 'public/views/crearRol.html',
        controller: 'mainController'
    })
    .when('/crearUsuario', {
        templateUrl: 'public/views/crearusuario.html',
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
myApp.directive('menuUsuarios', [function() {
  return {
      templateUrl : 'public/views/menuusuarios.html'
  }
}]);

myApp.service('mensajeService',mensajeService);
mensajeService.$inject = [
    '$http',
    '$location'
];

function mensajeService($http,$location){
    var Mensaje = [];
    var ctrl = this;
    
    ctrl.getMensaje = function(){
        var path = $location.path($location.path());
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allMensaje';
        var request = {
			method: 'GET',
			url: baseUrl
        };
        $http(request).then(function(response){
            Mensaje = response.data;
        });
    }
    
    ctrl.Mensaje = function(){
        return Mensaje;
    }
};
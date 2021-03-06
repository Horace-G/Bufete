var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'public/views/home.html',
        controller: 'mainController'
    })
    
    .when('/medicamentos', {
        templateUrl: 'public/views/configuracion.html',
        controller: 'mainController'
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
    
     .when('/modificarExpediente', {
        templateUrl: 'public/views/modificarExpediente.html',
        controller: 'mainController'
    })
    
     .when('/verExpediente', {
        templateUrl: 'public/views/verExpediente.html',
        controller: 'buscar_medicamento'
    })
    
     .when('/buscarMedicamento', {
        templateUrl: 'public/views/buscarMedicamento.html',
        controller: 'mainController'
    })
    
    .when('/historico', {
        templateUrl: 'public/views/historico.html',
        controller: 'mainController'
    })
    .when('/ModificarExpedienteCiclo', {
        templateUrl: 'public/views/ModificarExpedienteCiclo.html',
        controller: 'mainController'
    })
    
     .when('/reportes', {
        templateUrl: 'public/views/reportes.html',
        controller: 'mainController'
    })
    
    .when('/usuarios', {
        templateUrl: 'public/views/usuarios.html',
        controller: 'mainController'
    })
    
     .when('/modificarConfiguracion', {
        templateUrl: 'public/views/modificarConfiguracion.html',
        controller: 'mainController'
    })
    
    .when('/second/:num', {
        templateUrl: 'public/views/second.html',
        controller: 'mainController'
    })
    
    .when('/logohome', {
        templateUrl: 'public/views/about.html',
        controller: 'mainController'
    })
    
});

myApp.directive('buffetNav', [function() {
  return {
      controller: 'mainController',
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

myApp.service('rolService',rolService);
rolService.$inject = [
    '$http',
    '$location'
];

myApp.service('medicamentoService',medicamentoService);
medicamentoService.$inject = [
    '$http',
    '$location'
];

myApp.service('permisosUsuarioService',permisosUsuarioService);
permisosUsuarioService.$inject = [
    '$http',
    '$location'
]

function permisosUsuarioService($http,$location){
    var ctrl = this;
    ctrl.Permisos = {};
    ctrl.initPermisos = function(){
        var path = $location.path($location.path());
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/getUserPermisos';
        var request = {
			method: 'GET',
			url: baseUrl
        };
        return $http(request).then(function(response){
             ctrl.Permisos = response.data;
            console.log(ctrl.Permisos);
        });
    }
    
    ctrl.getPermisos = function(){
        return Permisos;
    }
}

function medicamentoService($http,$location) {
    var ctrl = this;
    
    ctrl.getPresentacionComercial = function(){
        var path = $location.path($location.path());
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allPresentacionComercial';
        var request = {
			method: 'GET',
			url: baseUrl
        };
        return $http(request).then(function(response){
            return response.data;
        });
    };

    ctrl.getFormaFarmaceutica = function(){
        var path = $location.path($location.path());
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allFormaFarmaceutica';
        var request = {
			method: 'GET',
			url: baseUrl
        };
        return $http(request).then(function(response){
            return response.data;
        });
    };

    ctrl.getCategoria = function(){
        var path = $location.path($location.path());
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allCaregoriaMedicamento';
        var request = {
			method: 'GET',
			url: baseUrl
        };
        return $http(request).then(function(response){
            return response.data;
        });
    };
    
     ctrl.getLaboratorio = function(){
        var path = $location.path($location.path());
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allLaboratorio';
        var request = {
			method: 'GET',
			url: baseUrl
        };
        return $http(request).then(function(response){
            return response.data;
        });
    };
    
     ctrl.getEstadoCicloVida = function(){
        var path = $location.path($location.path());
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allEstadoCicloVida';
        var request = {
			method: 'GET',
			url: baseUrl
        };
        return $http(request).then(function(response){
            return response.data;
        });
    };
    
     ctrl.getModalidadVenta = function(){
        var path = $location.path($location.path());
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allModalidadVenta';
        var request = {
			method: 'GET',
			url: baseUrl
        };
       return $http(request).then(function(response){
            return response.data;
        });
    };
    
     ctrl.getViaAdministracion = function(){
        var path = $location.path($location.path());
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allViaAdministracion';
        var request = {
			method: 'GET',
			url: baseUrl
        };
        return $http(request).then(function(response){
            return response.data;
        });
    };
};



function rolService($http,$location) {
    var ctrl = this;    
    
    ctrl.getRoles = function(){
        var path = $location.path($location.path());
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allRol';
        var request = {
			method: 'GET',
			url: baseUrl
        };
        return $http(request).then(function(response){
            return response.data;
        });
    };
};

function mensajeService($http,$location){
    /*
        GRAVEDAD
        0 = Success
        1 = WARNING
        2 = FATAL
        3 = ?????
        
        POS
        0 = Longitud(64)
        1 = Longitud(128);
        2 = 
    */
    var Mensajes = [];
    var ctrl = this;
    
    ctrl.getMensaje = function(){
        var path = $location.path($location.path());
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allMensaje';
        var request = {
			method: 'GET',
			url: baseUrl
        };
        $http(request).then(function(response){
            Mensajes = response.data;
        });
    };
    
    ctrl.Mensajes = function(){
        return Mensajes;
    };
    
    ctrl.ShowMessage = function(nameMessage,nameInput){
        if (!nameInput){
            nameInput = '';
        }
        angular.forEach(Mensajes,function(mensaje,id){
            console.log(mensaje);
            if (nameMessage == mensaje.nombre){
                if (mensaje.gravedad == 1){
                    console.log('W');
                    toastr.warning(nameInput+' '+mensaje.descripcion,'Warning!');
                }else if (mensaje.gravedad == 2){
                    toastr.error(nameInput + ' ' + mensaje.descripcion,'Error!');
                }else if (mensaje.gravedad == 0){
                    toastr.success(nameInput +' '+ mensaje.descripcion,'Success!');
                }else{
                    toastr.error('ERROR!','WUT');
                }
                return;
            }
    
        });
        
    };
};
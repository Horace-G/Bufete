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

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams','$http', function($scope, $log, $routeParams,$http) {
    
    $scope.num = $routeParams.num || 1;
    
}]);


myApp.controller('presentacion_comercial', ['$scope','$http', function ($scope,$http) {

 
$scope.nombre = '';
$scope.descripcion = '';
    
$scope.submit = function () {
    
    $scope.symbols = new RegExp("/^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/");
    
    if ($scope.nombre == undefined || $scope.descripcion == undefined){
		alert('Datos ingresados erroneamente'); 
        return;
	}else if($scope.nombre.length>64||$scope.descripcion.length>128){
        alert('Datos ingresados no coinciden con la longitud'); 
        return;
    }else if($scope.symbols.test($scope.nombre)){
        alert("Datos ingresados contienen caracteres no validos");
        return;
    }else{
	var request = {
			method: 'POST',
			url: "http://fia.unitec.edu:8082/Bufete/index.php/savePresentacionComercial",
			data: {namePresentacionComercial: $scope.nombre, descriptionPresentacionComercial: $scope.descripcion, userPresentacionComercial: '1234', estadoPresentacionComercial: '1'}
	};
	$http(request).then(function(response){
		console.log(response.data.success);
		alert('Guardado exitosamente')
		$scope.nombre = '';
		$scope.descripcion = '';
	});
    }

          


};
}]);
myApp.controller('modalidad_venta', ['$scope','$http', function ($scope,$http) {
    $scope.nombre = '';
          $scope.descripcion='';

$scope.submit = function () {
    if ($scope.nombre == undefined || $scope.descripcion == undefined){
		alert('Datos ingresados erroneamente'); 
        return;
	}else if($scope.nombre.length>64||$scope.descripcion.length>128){
        alert('Datos ingresados no coinciden con la longitud'); 
        return;
    }else if($scope.symbols.test($scope.nombre)){
        alert("Datos ingresados contienen caracteres no validos");
        return;
    }else{
var request = {
			method: 'POST',
			url: "http://fia.unitec.edu:8082/Bufete/index.php/saveModalidadVenta",
			data: {nameModalidadVenta: $scope.nombre, descriptionModalidadVenta: $scope.descripcion, userModalidadVenta: '1234', estadoModalidadVenta: '1'}
	};
	$http(request).then(function(response){
		console.log(response.data.success);
		alert('Guardado exitosamente')
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
};
}]);
myApp.controller('categoria', ['$scope','$http', function ($scope,$http) {
 
    $scope.nombre = '';
          $scope.descripcion='';
    
$scope.submit = function () {
    if ($scope.nombre == undefined || $scope.descripcion == undefined){
		alert('Datos ingresados erroneamente'); 
        return;
	}else if($scope.nombre.length>64||$scope.descripcion.length>128){
        alert('Datos ingresados no coinciden con la longitud'); 
        return;
    }else if($scope.symbols.test($scope.nombre)){
        alert("Datos ingresados contienen caracteres no validos");
        return;
    }else{
var request = {
			method: 'POST',
			url: "http://fia.unitec.edu:8082/Bufete/index.php/saveCategoriaMedicamento",
			data: {nameCategoriaMedicamento: $scope.nombre, descriptionCategoriaMedicamento: $scope.descripcion, userCategoriaMedicamento: '1234', estadoCategoriaMedicamento: '1'}
	};
	$http(request).then(function(response){
		console.log(response.data.success);
		alert('Guardado exitosamente')
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
         

};
}]);
myApp.controller('ciclo_vida', ['$scope','$http', function ($scope,$http) {

    $scope.nombre = '';
          $scope.descripcion='';
    
$scope.submit = function () {
    if ($scope.nombre == undefined || $scope.descripcion == undefined){
		alert('Datos ingresados erroneamente'); 
        return;
	}else if($scope.nombre.length>64||$scope.descripcion.length>128){
        alert('Datos ingresados no coinciden con la longitud'); 
        return;
    }else if($scope.symbols.test($scope.nombre)){
        alert("Datos ingresados contienen caracteres no validos");
        return;
    }else{
var request = {
			method: 'POST',
			url: "http://fia.unitec.edu:8082/Bufete/index.php/saveEstadoCicloVida",
			data: {nameEstadoCicloVida: $scope.nombre, descriptionEstadoCicloVida: $scope.descripcion, userEstadoCicloVida: '1234', estadoEstadoCicloVida: '1'}
	};
$http(request).then(function(response){
		console.log(response.data.success);
		alert('Guardado exitosamente')
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
        
};
}]);
myApp.controller('via_administracion', ['$scope','$http', function ($scope,$http) {

    $scope.nombre = '';
          $scope.descripcion='';
    
$scope.submit = function () {
    if ($scope.nombre == undefined || $scope.descripcion == undefined){
		alert('Datos ingresados erroneamente'); 
        return;
	}else if($scope.nombre.length>64||$scope.descripcion.length>128){
        alert('Datos ingresados no coinciden con la longitud'); 
        return;
    }else if($scope.symbols.test($scope.nombre)){
        alert("Datos ingresados contienen caracteres no validos");
        return;
    }else{
var request = {
			method: 'POST',
			url: "http://fia.unitec.edu:8082/Bufete/index.php/saveViaAdministracion",
			data: {nameViaAdministracion: $scope.nombre, descriptionViaAdministracion: $scope.descripcion, userViaAdministracion: '1234', estadoViaAdministracion: '1'}
	};
	$http(request).then(function(response){
		console.log(response.data.success);
		alert('Guardado exitosamente');
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
};
}]);
myApp.controller('Creacion_Rol', ['$scope','$http', function ($scope,$http) {
    
    $scope.nombre = '';
          $scope.descripcion='';
    
$scope.submit = function () {
    if ($scope.nombre == undefined || $scope.descripcion == undefined){
		alert('Datos ingresados erroneamente'); 
        return;
	}else if($scope.nombre.length>64||$scope.descripcion.length>128){
        alert('Datos ingresados no coinciden con la longitud'); 
        return;
    }else if($scope.symbols.test($scope.nombre)){
        alert("Datos ingresados contienen caracteres no validos");
        return;
    }else{
var request = {
			method: 'POST',
			url: "http://fia.unitec.edu:8082/Bufete/index.php/saveRol",
			data: {nombreRol: $scope.nombre, descriptionRol: $scope.descripcion, estadoRol: '1'}
	};
	$http(request).then(function(response){
		console.log(response.data.success);
		alert('Guardado exitosamente');
		$scope.nombre = '';
$scope.descripcion = '';
	});
    }
          
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
myApp.directive('menuUsuarios', [function() {
  return {
      templateUrl : 'public/views/menuusuarios.html'
  }
}]);

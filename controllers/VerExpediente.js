angular.module('myApp').controller('crearexpediente', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
  var ctrl = this;
   
    ctrl.init = function(){
        alert(sessionStorage.IdMedicamento);
        alert("ggg");
    };
    ctrl.init();
    

    
}]);
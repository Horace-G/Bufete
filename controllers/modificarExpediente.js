angular.module('myApp').controller('modificarExpediente', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
  var ctrl = this;
    $scope.Medicamentos=[];
    ctrl.init = function(){
       alert(sessionStorage.IdMedicamento);
       var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/getMedicamento';
        var request = {
                method: 'POST',
                url: baseUrl,
                data: {idMedicamento: sessionStorage.IdMedicamento}
        };
        $http(request).then(function(response){
            Medicamentos=response.data;
            console.log(Medicamentos);
            $scope.nombreExpediente=Medicamentos[0].MedicamentoNombre;
            $scope.representante=Medicamentos[0].NombreRepresentante;
             if(typeof(Storage) !== "undefined") {
                sessionStorage.IdMedicamento=$scope.codigo;
                }else{   
                }
        });
    };
    ctrl.init();
    $scope.historico = function(){
      window.location=document.getElementById('historico').href;  
    };
    $scope.volver = function(){
          window.location=document.getElementById('buscarMedicamento').href;  
    }
    $scope.modificarCiclo = function(){
          window.location=document.getElementById('ModificarExpedienteCiclo').href;  
    }
    $scope.modificar = function(){
        window.location="#/modificarExpediente";
    }
    
}]);
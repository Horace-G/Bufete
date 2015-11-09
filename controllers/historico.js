angular.module('myApp').controller('historia_ciclo', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
  var ctrl = this;
    $scope.Medicamentos=[];
    $scope.listaEstados=[];
    ctrl.init = function(){
       
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
            $scope.nombre=Medicamentos[0].MedicamentoNombre;
            $scope.codigo=Medicamentos[0].MedicamentoId;
            $scope.estado=Medicamentos[0].CicloVidaNombre;
            $scope.laboratorio=Medicamentos[0].LaboratorioNombre;
            
        });
        var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/getHistorial';
        var request = {
                method: 'POST',
                url: baseUrl,
                data: {id_medicamentoHistorial: sessionStorage.IdMedicamento}
        };
        $http(request).then(function(response){
            alert("gg");
            $scope.listaEstados=response.data;
            console.log($scope.listaEstados);
            
        });
    };
    ctrl.init();
    

    
}]);
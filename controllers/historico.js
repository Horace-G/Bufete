angular.module('myApp').controller('VerExpediente', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
  var ctrl = this;
    $scope.Medicamentos=[];
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
    };
    ctrl.init();
    

    
}]);
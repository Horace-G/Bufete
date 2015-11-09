angular.module('myApp').controller('VerExpediente', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
  var ctrl = this;
    var Medicamentos=[];
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
            alert(response.data.FormaFarmaceuticaNombre);
            $scope.nombreFormaFarmaceutica=Medicamentos.FormaFarmaceuticaNombre;
            $scope.nombreViaAdministracion=Medicamentos.ViaAdministracionNombre;
            $scope.nombreModalidadVenta=Medicamentos.ModalidadNombre;
            $scope.nombrePresentacionComercial=Medicamentos.PresentacionComercialNombre;
            $scope.nombre=Medicamentos.MedicamentoNombre;
            $scope.codigo=Medicamentos.MedicamentoId;
            $scope.estado=Medicamentos.CicloVidaNombre;
        });
    };
    ctrl.init();
    

    
}]);
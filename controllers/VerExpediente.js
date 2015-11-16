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
            $scope.nombreFormaFarmaceutica=Medicamentos[0].FormaFarmaceuticaNombre;
            $scope.nombreViaAdministracion=Medicamentos[0].ViaAdminstracionNombre;
            $scope.nombreModalidadVenta=Medicamentos[0].ModalidadNombre;
            $scope.nombrePresentacionComercial=Medicamentos[0].PresentacionComercialNombre;
            $scope.nombre=Medicamentos[0].MedicamentoNombre;
            $scope.codigo=Medicamentos[0].MedicamentoId;
            $scope.estado=Medicamentos[0].CicloVidaNombre;
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
    
}]);
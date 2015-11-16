angular.module('myApp').controller('ModificarExpedienteCiclo', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {

    
    var ctrl = this;
    $scope.allOptions = [];
    $scope.selectedOption = {};
    ctrl.init = function(){
        var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allEstadoCicloVidaMod';
        var request = {
                method: 'GET',
                url: baseUrl
        };
        $http(request).then(function(response){
            $scope.allOptions = response.data;
        });
    var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/getMedicamento';
        var request = {
                method: 'POST',
                url: baseUrl,
                data: {idMedicamento: sessionStorage.IdMedicamento}
        };
        $http(request).then(function(response){
            Medicamentos=response.data;
                    
            $scope.nombre=Medicamentos[0].MedicamentoNombre;
            
             if(typeof(Storage) !== "undefined") {
                sessionStorage.IdMedicamento=$scope.codigo;
                }else{   
                }
        });
    };
}]);
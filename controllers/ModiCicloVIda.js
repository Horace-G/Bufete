angular.module('myApp').controller('ModificarExpedienteCiclo', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {

    
    var ctrl = this;
    $scope.allOptions = [];
    $scope.selectedOption = {};
    $scope.id;
    $scope.estadoviejo;
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
            $scope.id=Medicamentos[0].MedicamentoId;        
            $scope.nombre=Medicamentos[0].MedicamentoNombre;
            $scope.estado=Medicamentos[0].CicloVidaNombre;
            $scope.estadoviejo=Medicamentos[0].CicloVidaId;
             if(typeof(Storage) !== "undefined") {
                sessionStorage.IdMedicamento=$scope.codigo;
                }else{   
                }
        });
         var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allEstadoCicloVidaMod';
        var request = {
                method: 'GET',
                url: baseUrl
        };
        $http(request).then(function(response){
            $scope.allOptions = response.data;
            for(var i=0;i<$scope.allOptions.length;i++){
                
                if($scope.allOptions[i].nombre==$scope.estado){
                    $scope.allOptions.splice(i,1);
                }
            }
            
        });
    };
    ctrl.init();
    $scope.Modificar = function(){
        
        var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveHistorialCicloVida';
        console.log($scope.allOptions);
        console.log($scope.selectedOption);
        var request = {
                method: 'POST',
                url: baseUrl,
                data: {idMedicamento: $scope.id,
                       idEstado: $scope.selectedOption,
                       idEstadoViejo:$scope.estadoviejo,
                        nombreEstado:$scope.allOptions[$scope.selectedOption].nombre,
                       nombreEstadoViejo:$scope.estado
                      }
        };
        console.log(request);
        $http(request).then(function(response){
            if(response.data.Success=="true"){
                        mensajeService.ShowMessage('UPDATE_ESTADO','Medicamento');

            }else{
                        mensajeService.ShowMessage('WUT!','Error Grave Apague la Compu');
            }
        });
    }
}]);
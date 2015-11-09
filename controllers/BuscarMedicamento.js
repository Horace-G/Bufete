angular.module('myApp').controller('buscar_medicamento', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
  var ctrl = this;
    $scope.listaMedicamentos = [];
    $scope.atributosBusqueda = [];
    $scope.selectedOption = {};
    ctrl.init = function(){
        var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/searchValues';
        var request = {
                method: 'GET',
                url: baseUrl
        };
        $http(request).then(function(response){
            $scope.atributosBusqueda = response.data;
            console.log(response.data);
        });
        
    };
    ctrl.init();
    $scope.buscar= function(){
        var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/getSearch';
        var request = {
                method: 'POST',
                url: baseUrl,
                data: {searchBy: $scope.selectedOption,palabraClave:$scope.atributoClave}
        };
        $http(request).then(function(response){
            $scope.listaMedicamentos=response.data;
            console.log(response.data);
        });
    };
    
    
    $scope.search = function(item){
        if(typeof(Storage) !== "undefined") {

        sessionStorage.IdMedicamento=item.MedicamentoId;
        //window.location=document.getElementById('ver').href;


            sessionStorage.IdMedicamento=item.MedicamentoId;
            //alert(item.MedicamentoId);
            //$("a").attr("href", "#/verExpediente");
<<<<<<< HEAD
            $location.path('#/verExpediente');
            //window.location=document.getElementById('ver').href;

=======
            //$location.path('#/verExpediente');
            window.location=document.getElementById('ver').href;
>>>>>>> d3b133766ba82b6fc58a73c4c52db02ec269ca8c
        }else{
            
        }


    }

    
}]);
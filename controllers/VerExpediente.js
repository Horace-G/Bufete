angular.module('myApp').controller('VerExpediente', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
  var ctrl = this;
   
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
            console.log(response.data);
        });
    };
    ctrl.init();
    

    
}]);
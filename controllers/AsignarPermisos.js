angular.module('myApp').controller('AsignarPermisos', ['$scope','$http','$location','mensajeService', function ($scope,$http,$location,mensajeService) {
  var ctrl = this;
    $scope.allOptions = [];
    $scope.allPermisos= [];
    $scope.allRol= [];
    $scope.selectedOption = {};
    ctrl.init = function(){
        var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allRol';
        var request = {
                method: 'GET',
                url: baseUrl
        };
        $http(request).then(function(response){
            $scope.allOptions = response.data;
        });
        var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allPermiso';
        var request = {
                method: 'GET',
                url: baseUrl
        };
        $http(request).then(function(response){
            $scope.allPermisos = response.data;
            console.log($scope.allPermisos);
        });
    };
    $scope.onChangeSelect = function(){
        
        var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allPermisoRol';
        var request = {
                method: 'POST',
                url: baseUrl,
                data: {idRol: $scope.selectedOption}
        };
        $http(request).then(function(response){
            $scope.allRol = response.data;
        });
        for(int i=0;i<$scope.allRol.length;i++){
        document.getElementById(allRol[0].id).checked = true;    
        }
    };
    ctrl.init();
}]);
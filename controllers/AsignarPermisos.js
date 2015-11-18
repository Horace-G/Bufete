angular.module('myApp').controller('AsignarPermisos', ['$scope','$http','$location','mensajeService','$route', function ($scope,$http,$location,mensajeService,$route) {
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
    ctrl.init();
    $scope.onChangeSelect = function(){
        var count2 = Object.keys($scope.allPermisos).length;
        for(var i=1;i<=count2;i++){
                
                document.getElementById($scope.allPermisos[i - 1].id).checked = false;
                
        }
        var path = $location.path($location.path());
        var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/allRolPermiso';
        var request = {
                method: 'GET',
                url: baseUrl,
                
        };
        $http(request).then(function(response){
            
            $scope.allRol = response.data;
            var count = Object.keys($scope.allRol).length;
            for(var i=0;i<count;i++){
                if($scope.selectedOption==$scope.allRol[i].rol_id){
                document.getElementById($scope.allRol[i].permiso_id).checked = true;
                }
            }
            
        });
        
        
    };
    
    $scope.submit = function () {
        if($scope.selectedOption==parseInt($scope.selectedOption)){
            
        }else{
            mensajeService.ShowMessage('NO_SELECTED','Rol');
            return;
        }
        var SelectedPermisos=[];
        var sizetable=$('#table tr').length-1;
        for(var i=1;i<=sizetable;i++){
            if(document.getElementById($scope.allPermisos[i - 1].id).checked)
                SelectedPermisos.push($scope.allPermisos[i - 1].id);  
        }
        
        var path = $location.path($location.path());
        
		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveRolPermiso';
var request = {
			method: 'POST',
			url: baseUrl,
			data: {permiso_id: SelectedPermisos, rol_id: $scope.selectedOption}
	};
	
	
$http(request).then(function(response){
    if(response.data.Success=="true"){
		console.log(response.data.success);
        mensajeService.ShowMessage('SUCCESS_SAVE','Permisos de Rol');
        $route.reload();
    }else{
        mensajeService.ShowMessage('FAILED_SAVE','Permisos de Rol');
    }

});
    };
    
}]);
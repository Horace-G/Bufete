angular.module('myApp').controller('crear_usuario', ['$scope','$http','$location','mensajeService','rolService', function ($scope,$http,$location,mensajeService,rolService) {
$scope.init = function () {
    var roles = [];
    rolService.getRoles().then(function(data){
       roles=data;
    
    var count = Object.keys(roles).length;
    alert(roles[0]);
    for(var i=0;i<count;i++){
        
        var $selectDropdown = 
      $("#dropdownid")
    
    // add new value
    var value = "Juan";
    $selectDropdown.append(
      $("<option selected></option>")
        .attr("number",value)
        .text(value)
    );

    // trigger event
    $selectDropdown.trigger('contentChanged');
    }
    });
    
}
$('select').on('contentChanged', function() {
    // re-initialize (update)
    $(this).material_select();
  });


$scope.init();


$scope.submitGuardar = function () {
    
    $scope.valid = 1;
    
     if($scope.valid == 1){
        
        var path = $location.path($location.path());
        //
        
        
		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveUsuario';
		console.log(baseUrl);
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {}
	};
    toastr.error('ERROR!','Guardado');
	$http(request).then(function(response){
        if(response.data.success.equals("true")){
            console.log(response.data.success);
            
        }else{
            mensajeService.ShowMessage('FAILED_SAVE','Usuario');
        }
	});
    }


};
}]);
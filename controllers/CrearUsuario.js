var roles = [];
angular.module('myApp').controller('crear_usuario', ['$scope','$http','$location','mensajeService','rolService', function ($scope,$http,$location,mensajeService,rolService) {
$scope.init = function () {
    
    rolService.getRoles().then(function(data){
       roles=data;
    
    var count = Object.keys(roles).length;
    for(var i=0;i<count;i++){
        if($('#dropdownid').find(":selected").text()=="Roles"){
    var $selectDropdown = 
      $("#dropdownid")
       .empty()
       .html(' ');
       
    }else{
        var $selectDropdown = 
      $("#dropdownid")
       
    }
    // add new value
    console.log(roles[i]);
      var value = roles[i].nombre;
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


$scope.submit = function () {
    
    $scope.valid = 1;
    var id = 0;
     if($scope.valid == 1){
        
        var path = $location.path($location.path());
        //
        var count = Object.keys(roles).length;
         for(var i=0;i<count;i++){
            if($('#dropdownid').find(":selected").text()==roles[i].nombre){
                id=roles[i].id;
            }
        }
        
		//Creating the baseUrl
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveUsuario';
		console.log(baseUrl);
         
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {usernameUsuario: $scope.user, nombreUsuario: $scope.nombre, passwordUsuario: $scope.pass, rol_idUsuario: id,estadoUsuario: '1'}
	};
    
	$http(request).then(function(response){
        if(response.data.success=="true"){
            console.log(response.data.success);
            mensajeService.ShowMessage('SUCCESS_SAVE','Usuario');
        }else{
            mensajeService.ShowMessage('FAILED_SAVE','Usuario');
        }
	});
    }


};
}]);
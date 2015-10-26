var roles = [];
angular.module('myApp').controller('crear_usuario', ['$scope','$http','$location','mensajeService','medicamentoService', function ($scope,$http,$location,mensajeService,rolService) {
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

    $scope.user = ''
    $scope.nombre = ''
    $scope.pass = ''
    $scope.confirmpass = ''


$scope.submit = function () {
    
    $scope.valid = 1;
    var id = 0;
    
    
    if($scope.user.length>16){
        $("#nombreUsuario").css("color","red");
        console.log("usuario muy largo");
       // mensajeService.ShowMessage('INPUT_EMPTY','Nombre Presentacion Comercial');
        $scope.valid = 0;
         return;
    }
    
     if($scope.name.length>64){
        $("#nombreCompleto").css("color","red");
        console.log("nombre muy largo");
       // mensajeService.ShowMessage('INPUT_EMPTY','Nombre Presentacion Comercial');
        $scope.valid = 0;
         return;
    }
    
    if($scope.pass.length<8){
        $("#usuarioPassword").css("color","red");
        console.log("pass muy corto");
       // mensajeService.ShowMessage('INPUT_EMPTY','Nombre Presentacion Comercial');
        $scope.valid = 0;
         return;
    }
    
    if($scope.confirmpass.length<8){
        $("#usuarioConfirmPassword").css("color","red");
        console.log("confirm pass muy corto");
       // mensajeService.ShowMessage('INPUT_EMPTY','Nombre Presentacion Comercial');
        $scope.valid = 0;
         return;
    }
    
    if($scope.pass !== $scope.confirmpass){
        $("#usuarioPassword").css("color","red");
        $("#usuarioConfirmPassword").css("color","red");
        console.log("no coinciden");
        $scope.valid = 0;
        
    }
    
     if($scope.valid == 1){
         
        $("#nombreUsuario").css("color","black");
        $("#nombreCompleto").css("color","black");
        $("#usuarioPassword").css("color","black");
        $("#usuarioConfirmPassword").css("color","black");
        
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
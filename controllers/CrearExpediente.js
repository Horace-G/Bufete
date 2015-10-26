var presentacioncomercial = [];
angular.module('myApp').controller('crearexpediente', ['$scope','$http','$location','mensajeService','medicamentoService', function ($scope,$http,$location,mensajeService,medicamentoService) {
$scope.init = function () {
    
    medicamentoService.getPresentacionComercial().then(function(data){
       presentacioncomercial=data;
    
    var count = Object.keys(presentacioncomercial).length;
    for(var i=0;i<count;i++){
        if($('#presentacionComercial').find(":selected").text()=="Presentacion Comercial"){
    var $selectDropdown = 
      $("#presentacionComercial")
       .empty()
       .html(' ');
       
    }else{
        var $selectDropdown = 
      $("#presentacionComercial")
       
    }
    // add new value
    console.log(presentacioncomercial[i]);
      var value = presentacioncomercial[i].nombre;
        $selectDropdown.append(
        $("<option selected></option>")
        .attr("number",value)
        .text(value)
    );  
    
    

    // trigger event
    $selectDropdown.trigger('contentChanged');
    }
    });
    
};
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
		var baseUrl = path.$$protocol + "://" + path.$$host + ":" + path.$$port + '/Bufete/index.php/saveExpediente';
		console.log(baseUrl);
         
	var request = {
			method: 'POST',
			url: baseUrl,
			data: {}
	};
    
	$http(request).then(function(response){
        if(response.data.success=="true"){
            console.log(response.data.success);
            mensajeService.ShowMessage('SUCCESS_SAVE','Expediente');
        }else{
            mensajeService.ShowMessage('FAILED_SAVE','Expediente');
        }
	});
    }


};
}]);
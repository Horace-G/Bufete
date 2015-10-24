<!DOCTYPE html>
<html lang="en-us" ng-app="myApp">
    <head>
        <title>Bufete Galdámez</title>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <!--Materialize CSS via CDN --->
        
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="./public/CSS/styles.css" rel="stylesheet">
        
        <link href="./public/CSS/toastr.css" rel="stylesheet">
        
        <style>
            html, body, input, select, textarea
            {
                font-size: 1.05em;
            }
        </style>
        
        <!-- load JQuery, angular and materialize JS via CDN -->
        
        <script src="./public/JS/jquery-1.9.1.min.js"></script>
        <script src="./public/JS/toastr.js"></script>
        
        <script src="./public/JS/materialize/js/materialize.min.js"></script>
        <script src="./public/JS/angular.min.js"></script> 
        <script src="./public/JS/angular-route.min.js"></script>
        
        <script src="./public/JS/angular-route.min.js"></script>
        <script src="./controllers/app.js"></script>
        <script src="./controllers/mainController.js"></script>
        <script src="./controllers/categoria.js"></script>
        <script src="./controllers/ciclo_vida.js"></script>
        <script src="./controllers/creacion_rol.js"></script>
        <script src="./controllers/modalidad_venta.js"></script>
        <script src="./controllers/presentacion_comercial.js"></script>
        <script src="./controllers/secondController.js"></script>
        <script src="./controllers/via_administracion.js"></script>
        
        
    </head>
    <body>

        <header>
                        
            
			<buffet-nav></buffet-nav><!--codigo del navbar-->
            
		</header>
             
        <div class="container">
            
            <div ng-view id="ngview"></div>
            
		</div>

    </body>
</html>
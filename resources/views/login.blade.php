<!DOCTYPE html>
<html lang="en-us">
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


        <script src="./public/JS/angular.min.js"></script> 
        <script src="./public/JS/angular-route.min.js"></script>
        <script src="./public/JS/materialize/js/materialize.min.js"></script>
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
        <script src="./controllers/crearlaboratorio.js"></script>
        <script src="./controllers/CrearUsuario.js"></script>
        <script src="./controllers/CrearExpediente.js"></script>
        <script src="./controllers/FormaFarmaceutica.js"></script>
    </head>
    <body>

        <header>
        </header>

        <div class="container">

            <ul class="collapsible popout collection with-header" data-collapsible="accordion" id="Config">
                <li class="center-align collection-header brown-text lighten-3">
                    <h4 class="flow-text header">Login</h4>
                    <h6 class="flow-text brown-text lighten-3"> Ingrese sus credenciales</h6>
                </li>
                <li collection-item id="Config-li">
                    <div class="collapsible-header"><i class="material-icons">info_outline</i>Iniciar Sesion</div>
                    <div class="collapsible-body popup-element">

                    <h3 class="center-align flow-text brown-text lighten-4">Ingrese sus credenciales</h3>
                    <div class="row padded">
                    <form class="col s12" method="POST" action="/Bufete/authenticate">
			{!! csrf_field() !!}
                        <div class="row">
                        <div class="input-field col s9">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="usuarioLogin" name="username" type="text" class="validate">
                            <label for="usuarioLogin">Usuario<span id="asterisco"> *</span></label>
                        </div>
                        <div class="input-field col s9">
                            <i class="material-icons prefix">lock_outline</i>
                            <input id="passwordLogin" type="password" name="password" class="validate">
                            <label for="passwordLogin">Password<span id="asterisco"> *</span></label>
                        </div>
                        <div class="col s9 right-align">
                            <button type="submit" class="btn-floating btn-large waves-effect waves-light brown lighten-1">+</button>
                        </div>

                        </div>
                    </form>

                    </div>

                    </div>
                </li>
            </ul>

        </div>

    </body>
</html>

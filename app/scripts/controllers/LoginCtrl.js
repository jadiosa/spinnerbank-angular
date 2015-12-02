  'use strict';

  angular.module('spinnerBankAngularApp')
   //Controlador encargo de realizar la autenticacion del usuario en el sistema
  .controller('LoginCtrl', function($scope,$rootScope, $location, API, toastr, UsuarioService) {
    $scope.token = location.search.substring(27,28);
   
    //Ingreso cuando el    token es obtenido
    if ($scope.token!='') {
      $scope.token = $scope.token+'/'+location.search.substring(29);
      console.log('Token '+ $scope.token);
      UsuarioService.setTokenGoogle($scope.token); 
      
      // Llamado al servicio de API External que devuelve en token de acceso 
      // para realizar las consultas de los demas servicios
      API.obtenerTokenApi(UsuarioService.getTokenGoogle())
        .success(function(data) {
            var tokenApi = data.access_token;
            console.log('toke api: '+tokenApi);
            UsuarioService.setAccess_token(tokenApi);
            // Llamado al Servicio que retorna la informacion del Usuario logeado
            // en el sistema.
            API.obtenerInfoUsuario(tokenApi)
              .success(function(data) {
                UsuarioService.setImagen(data.picture);
                UsuarioService.setNombre(data.given_name);
                toastr.success('Bienvenido ' + UsuarioService.getNombre());
               
                $location.url('/Principal');
              }).error(function (data, status) {

                })
        }).error(function (data, status) {
            console.log(data);
          });
    }

    // Funcion medinte la cual se envia la peticion a google para que solicite
    // al usuario permisos para acceder con si cuenta de google.
    $scope.login = function() {

        var scope = 'email';
        var client_id = '116421120632-otf7afrfqtfeiqlibtlatnou8964bge0.apps.googleusercontent.com';
        //var redirect_uri = 'https://spinnerbank-angular.herokuapp.com/';
        var redirect_uri = 'http://localhost:9000/';
        var response_type = 'code';
        var state = 'security_token';
        var access_type = 'offline';
        var approval_prompt = 'force';
        var url="https://accounts.google.com/o/oauth2/auth?scope="+
        scope+"&client_id="+client_id+"&redirect_uri="+redirect_uri+
       "&response_type="+response_type+"&state="+state+"&access_type="+
        access_type+"&approval_prompt="+approval_prompt;
        window.location.replace(url);
    };

  });

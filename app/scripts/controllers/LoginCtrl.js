  'use strict';

  angular.module('LoginGoogle', ['session.services', 'usuario'])
   //Controlador encargo de realizar la autenticacion del usuario en el sistema
  .controller('LoginCtrl', function($scope,$rootScope, $location, ApiSession, toastr, UsuarioService) {
    if (UsuarioService.getTokenGoogle()==="") {

      $scope.token = location.search.substring(27,28);
   
      //Ingreso cuando el    token es obtenido
      if ($scope.token!='') {
        $scope.token = $scope.token+'/'+location.search.substring(29);
        UsuarioService.setTokenGoogle($scope.token); 
        
        // Llamado al servicio de ApiSession External que devuelve en token de acceso 
        // para realizar las consultas de los demas servicios
        ApiSession.obtenerTokenApi(UsuarioService.getTokenGoogle())
          .success(function(data) {
             console.log('Data: ' + data);
              var tokenApi = data.jwt;
              console.log('Token JWT: ' + tokenApi);
              UsuarioService.setAccess_token(tokenApi);
              // Llamado al Servicio que retorna la informacion del Usuario logeado
              // en el sistema.
              ApiSession.obtenerInfoUsuario(tokenApi)
                .success(function(data) {
                 UsuarioService.setImagen(data.picture);
                 UsuarioService.setNombre(data.given_name);
                 toastr.success('Bienvenido ' + UsuarioService.getNombre());
                 $location.url('/Principal');
                 //window.location.replace('http://localhost:9000/#/Principal');
                }).error(function (data, status) {
                    console.log(data);
                    toastr.error('Ofrecemos disculpas, por favor intententa en unos minutos');
                })
          }).error(function (data, status) {
              console.log(data);
              toastr.error('Ofrecemos disculpas, por favor intententa en unos minutos');
        });
      }
    }else{
      //window.location.replace('http://localhost:9000/#/');
    };

    // Funcion medinte la cual se envia la peticion a google para que solicite
    // al usuario permisos para acceder con si cuenta de google.
    $scope.login = function() {

        var scope = 'email';
        var client_id = '116421120632-otf7afrfqtfeiqlibtlatnou8964bge0.apps.googleusercontent.com';
        //var redirect_uri = 'http://spinnerbank-angular.herokuapp.com/';
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

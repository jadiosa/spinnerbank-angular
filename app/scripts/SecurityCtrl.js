angular.module('spinnerBankAngularApp')
  //Controlador encargado de realizar la Autorizacion y Autenticacion de los 
  // usuarios en el sistema
  .controller('SecurityCtrl', function($scope, $routeParams, $location, API, toastr) {
    
    console.log('SecurityCtrl'); 

     // Llamado al servicio de API External que devuelve en token de acceso 
     // para realizar las consultas de los demas servicios
     API.obtenerTokenApi($scope.root.accesstoken)
        .success(function(data) {
            var tokenApi = data.access_token;
            // Llamado al Servicio que retorna la informacion del Usuario logeado
            // en el sistema.
            API.obtenerInfoUsuario(tokenApi)
              .success(function(data) {
               var infoUsuario = data
            
              }).error(function (data, status) {
                })
        }).error(function (data, status) {
          })
  });
'use strict';

angular.module('asesor.services', [])
  .factory('ApiAsesor', function($http) {
    var base = 'http://spinnerbank-api-external.herokuapp.com';

    return {

      //Servicio encargado de obtener la informacion del asesor del usuario logeado
      // en elsistema mediante el Token de acceso que provee el Api Backend
      obtenerInfoAsesor: function(TokenApi, usuarioId) {
        return $http.get(base + '/v2/customer/adviser/'+ usuarioId, {
          method: 'GET',
          params : {
            jwt:TokenApi
          }
        });
      }
    };
  });

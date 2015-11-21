'use strict';

angular.module('productos.services', [])
  .factory('API', function($http) {
    var base = 'https://spinnerbank-api-external.herokuapp.com';
    var client_id = '116421120632-otf7afrfqtfeiqlibtlatnou8964bge0.apps.googleusercontent.com';

    return {
      //Servicio mediante el cual se obtiene los detalles de los movimientos
      // de un producto de un cliente
      detalleMovimientos: function(productId) {
        return $http.get(base + '/v1/transactions/' + productId, {
          method: 'GET'
        });
      },

      //Servicio mediante el cual se obtiene la informacion de los productos de
      // un cliente
      obtenerProductos: function(id) {
        return $http.get(base + '/v1/products/' + id + '/CC', {
          method: 'GET'
        });
      },

      loginGoogle: function() {
        return $http.get('https://accounts.google.com/o/oauth2/auth', {
          method: 'GET',
          headers : {
            'Access-Control-Allow-Origin' : 'http://localhost:9000'
          },
          params : {
            'response_type':'code',
            'client_id':client_id,
            'redirect_uri':'http://spinnerbank-api-external.herokuapp.com/v1/oAuth2/code',
            'scope':'email',
            'state':'security_token',
            'access_type':'offline',
            'approval_prompt':'force'
          }
        });
      },

      loginGoogle2: function() {
        return $http.jsonp('https://accounts.google.com/o/oauth2/auth', {
          method: 'jsonp',
          callback: "JSON_CALLBACK",
          format:'jsonp',
          dataType: 'jsonp',
          params : {
            'response_type':'code',
            'client_id':client_id,
            'redirect_uri':'http://spinnerbank-api-external.herokuapp.com/v1/oAuth2/code',
            'scope':'email',
            'state':'security_token',
            'access_type':'offline',
            'approval_prompt':'force'
          }
        });
      },

      //Servicio mediante el cual se envia el token de seguridad a SpinnerBank Backend para 
      // que desde este se realice la autenticacion del usuario
      obtenerTokenApi: function(codigoGoogle) {
        return $http.get('http://spinnerbank-api-external.herokuapp.com/v1/oAuth2/accessToken', {
          method: 'get',
          params : {
            'code':codigoGoogle
          }
        });
      },

      //Servicio encargado de obtener la informacion del usuario logeado en el 
      // sistema mediante el Token de acceso que provee el Api Backend
      obtenerInfoUsuario: function(TokenApi) {
        return $http.get('http://spinnerbank-api-external.herokuapp.com/v1/oAuth2/userInfo', {
          method: 'get',
          params : {
            'access_token':TokenApi
          }
        });
      }
    };
  });

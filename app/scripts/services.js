'use strict';

angular.module('productos.services', [])
  .factory('API', function($http) {
    var base = 'https://spinnerbank-api-external.herokuapp.com';
    var client_id = '116421120632-otf7afrfqtfeiqlibtlatnou8964bge0.apps.googleusercontent.com';

    return {

      detalleMovimientos: function(productId) {
        return $http.get(base + '/v1/transactions/' + productId, {
          method: 'GET'
        });
      },

      obtenerProductos: function(id) {
        return $http.get(base + '/v1/products/' + id + '/CC', {
          method: 'GET'
        });
      },

      loginGoogle: function() {
        return $http.get('https://accounts.google.com/o/oauth2/auth', {
          method: 'GET',
          headers : {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
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
      }
    };
  });

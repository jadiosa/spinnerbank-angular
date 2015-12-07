'use strict';

angular.module('productos.services', [])
  .factory('ApiProductos', function($http) {
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
      }
    };
  });

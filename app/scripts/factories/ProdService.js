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

      detalleMovimientos2: function(token, productId) {
        console.log('Token desde el servicio: ' + token);
        return $http.get(base + '/v2/transactions/' + productId, {
          method: 'GET',
          params: {
            jwt: token
          }
        });
      },

      //Servicio mediante el cual se obtiene la informacion de los productos de
      // un cliente
      obtenerProductos: function(id) {
        return $http.get(base + '/v1/products/' + id + '/CC', {
          method: 'GET'
        });
      },

      obtenerProductos2: function(token, id) {
        console.log('Token desde el servicio: ' + token);
        return $http.get(base + '/v2/products/' + id + '/CC', {
          method: 'GET',
          params: {
            jwt: token
          }
        });
      },

      obtenerNombreTipoProducto: function(token) {
        return $http.get(base + '/v2/products/type', {
          method: 'GET',
          params: {
            jwt: token
          }
        });
      },

      enviarSolicitud: function(token, nombre, tipoProducto, monto, correo) {
        console.log('sNombre: ' + nombre);
        console.log('sTipo: ' + tipoProducto);
        console.log('sCupo: ' + monto);
        console.log('sCorreo: ' + correo);
        console.log('sToken: ' + token);

        return $http.get(base + '/v2/product/request/', {
          method: 'GET',
          params: {
            jwt: token,
            name: nombre,
            productType: tipoProducto,
            amount: monto,
            email: correo
          }
        });
      }
    };
  });

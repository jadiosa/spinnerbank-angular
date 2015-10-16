'use strict';

angular.module('productos.services', [])
  .factory('API', function($http) {
    var base = 'https://spinnerbank-api-external.herokuapp.com';

    return {

      lista_movimientos: [{
        id: 1936941186,
        idProducto: 1,
        fechaMovimiento: '27/enero/2015',
        descripcion: 'Pagos en linea',
        valorMovimiento: 256411

      },{
        id: 1936941186,
        idProducto: 1,
        fechaMovimiento: '5/febrero/1999',
        descripcion: 'Pagos en linea',
        valorMovimiento: 1

      },{
        id: 1936941186,
        idProducto: 1,
        fechaMovimiento: '5/marzo/1999',
        descripcion: 'Pago sucursal Oviedo',
        valorMovimiento: 1000000

      },{
        id: 54896257,
        idProducto: 2,
        fechaMovimiento: '27/enero/2015',
        descripcion: 'Pagos en linea',
        valorMovimiento: 256411

      }],


      detalleMovimientos: function(productId) {
        return $http.get(base + '/transactions/' + productId, {
          method: 'GET'
        });

        /*
        var lista = [];
        for (var i in this.lista_movimientos) {
          if (this.lista_movimientos[i].id == id) {
            if (this.lista_movimientos[i].idProducto == cod) {
              lista.push(this.lista_movimientos[i]);
            }
          }
        }
        return lista;
        */
      },

      obtenerProductos: function(id) {
        return $http.get(base + '/productos/' + id, {
          method: 'GET'
        });
      }
    };
  });

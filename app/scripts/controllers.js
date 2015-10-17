'use strict';

angular.module('productos.controllers',['productos.services'])
  .controller('prodControler', function($scope, API, $modal) {

    $scope.id = 1936941186;
    $scope.cod = 1;

    API.obtenerProductos($scope.id).success(function(data) {
      $scope.productos = data;
    });

  	$scope.detalles = function(producto) {
      var detalleProducto = $modal.open({
        templateUrl: 'views/Detalle.html',
        controller: 'modalControler',
        resolve: {
          producto: function () {
            return producto;
          }
        },
        size: 'ls'
      });
    };

  })

  .controller('modalControler', function ($scope, $modalInstance, API, producto) {

    //$scope.detalles = API.detalleMovimientos(producto.idProducto);

    API.detalleMovimientos(producto.idProducto).success(function(data) {
      $scope.detalles = data;
      $scope.productSelected = producto;
      console.log(producto);
    });

    $scope.salirDetalle = function() {
      $modalInstance.close();
    };
  });

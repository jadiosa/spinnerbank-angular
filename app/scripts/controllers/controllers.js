'use strict';

angular.module('productos.controllers',['productos.services','usuario'])
  // Controlador encargado de las funciones que se pueden realizar sobre
  // un producto 
  .controller('prodControler', function($scope, API, $modal,UsuarioService) {

    $scope.id = 1936941186;
    $scope.cod = 1;
    $scope.imagenPersonal = UsuarioService.getImagen();
    $scope.nombre = UsuarioService.getNombre();

    API.obtenerProductos($scope.id).success(function(data) {
      $scope.productos = data;
    });

    $scope.obtenerId = function(){
      return 1936941186;
    };
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

    API.detalleMovimientos(producto.productId).success(function(data) {
      $scope.detalles = data;
      $scope.productSelected = producto;
      console.log(producto);
    });

    $scope.salirDetalle = function() {
      $modalInstance.close();
    };
  });

'use strict';

angular.module('productos.controllers',['productos.services', 'usuario'])
  // Controlador encargado de las funciones que se pueden realizar sobre
  // un producto
  .controller('prodControler', function($scope, ApiProductos, $modal, $location, UsuarioService) {

    $scope.id = 1936941186;
    $scope.cod = 1;
    $scope.imagenPersonal = UsuarioService.getImagen();
    $scope.nombre = UsuarioService.getNombre();
    $scope.tokenApi = UsuarioService.getAccess_token();

    console.log('El token es: ' + $scope.tokenApi);

    ApiProductos.obtenerProductos2($scope.tokenApi, $scope.id)
      .success(function(data) {
        $scope.productos = data;
        console.log(data);
      })
      .error(function (data, status) {
        $scope.productos = '';
        console.log(data);
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

    $scope.nuevoProducto = function() {
      $location.url('/nuevoProducto');
    };

  })

  .controller('modalControler', function ($scope, $modalInstance, ApiProductos, producto) {


    ApiProductos.detalleMovimientos2($scope.tokenApi, producto.productId).success(function(data) {
      $scope.detalles = data;
      $scope.productSelected = producto;
    });

    $scope.salirDetalle = function() {
      $modalInstance.close();
    };
  })

  .controller('nuevoProducto', function($scope, ApiProductos, $modal, UsuarioService) {

  });

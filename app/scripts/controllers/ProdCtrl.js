'use strict';

angular.module('productos.controllers',['productos.services', 'usuario'])
  // Controlador encargado de las funciones que se pueden realizar sobre
  // un producto
  .controller('prodControler', function($scope, ApiProductos, $modal, $location, UsuarioService) {

    $scope.id = 54896257;
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

  .controller('modalControler', function ($scope, $modalInstance, ApiProductos, producto, UsuarioService) {

    $scope.tokenApi = UsuarioService.getAccess_token();

    ApiProductos.detalleMovimientos2($scope.tokenApi, producto.productId).success(function(data) {
      $scope.detalles = data;
      $scope.productSelected = producto;
    });

    $scope.salirDetalle = function() {
      $modalInstance.close();
    };
  })

  .controller('nuevoProducto', function($scope, ApiProductos, $modal, UsuarioService) {

    //$scope.nombres = ["Cuenta Bancaria", "Cuenta de Ahorros", "CDT", "Tarjeta"];
    //$scope.tipos = [["Cuenta Ahorros", "Cuenta Corriente"], ["Preferencial"], ["Debito", "Credito"]];
    var i;
    $scope.nombres = [];
    $scope.tipos = [];
    $scope.options2 = [];
    $scope.tokenApi = UsuarioService.getAccess_token();
    $scope.email = 'jaime951@gmail.com';

    ApiProductos.obtenerNombreTipoProducto($scope.tokenApi)

      .success(function(data) {
        for(i = 0; i < data.length; i++) {
          $scope.nombres.push(data[i].productName);
          $scope.tipos.push(data[i].productTypes);
        }
      })
      .error(function (data, status) {
        $scope.productos = '';
        console.log('error: ' + data);
      });

    $scope.getOptions2 = function() {
      var key = $scope.nombres.indexOf($scope.option1);
      var nuevasOpciones = $scope.tipos[key];
      $scope.options2 = nuevasOpciones;
    };

    $scope.enviar = function() {

      ApiProductos.enviarSolicitud($scope.tokenApi, $scope.option1, $scope.option2,
        $scope.cupo, $scope.email)

        .success(function(data) {
          console.log('success: ' + data)
        })
        .error(function (data, status) {
          console.log('error: ' + data);
        });
    }


  });

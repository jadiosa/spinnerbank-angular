angular.module('movimientos.controllers', ['movimientos.services'])

.controller('detalleProductoController', function($rootScope, $scope, API, $window) {

    $scope.producto = {
        codigo: '',
        idCliente: '',
        nombre: '',
        tipo: '',
        saldo: '',
        movimientos: []
    };

    $scope.movimientos = {
        Fecha: '',
        Descripcion: '',
        Valor: '',
    }

    $scope.detalle = function(codProducto) {
        API.detalleMovimiento($scope.producto.idCliente, $scope.producto.codigo)
	        .success(function(data) {
	        	console.log(data);
	        }).error(function(data) {
	        	console.log('error')
	        });
    }

});


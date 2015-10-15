'use strict';

/**
 * @ngdoc function
 * @name spinnerBankAngularApp.controller:prodControler
 * @description
 * # prodControler
 * Controller of the spinnerBank
 */
var spinner = angular.module('spinnerBankAngularApp');

spinner.controller('prodControler', function ($scope, $http, $location,Servicioproducto,$modal, $log) {


	$scope.userIdNumber=1936941186;
	$scope.selectedProduct = undefined;

	/* Metodo para consumir el servicio de listar productos*/
		Servicioproducto.obtenerProductos($scope.userIdNumber).success(function(data) {
					console.log(data)
					$scope.products = data;
			});


	/**Funcion llamada para mostrar los detalles de un producto de un cliente**/
	$scope.detalles = function(pruducto){

		console.log('Producto seleccionado: '+ pruducto);

		$scope.dMovimientos = [
			      {
			        fechaMovimiento: '27/enero/2015',
			        descripcion: 'Pagos en linea',
			        valorMovimiento: 256411

			      },
			      {
			        fechaMovimiento: '27/enero/2015',
			        descripcion: 'Pagos en linea',
			        valorMovimiento: 256411

			      },
			      {
			        fechaMovimiento: '27/enero/2015',
			        descripcion: 'Pagos en linea',
			        valorMovimiento: 256411

			      }
			    ];
			 console.log('Movimientos: '+$scope.dMovimientos);   

		var detalleProducto = $modal.open({
	      templateUrl: '/views/Detalle.html',
	      controller: function ($scope,$modalInstance) {
	  

	        $scope.salirDetalle = function () {
	          $modalInstance.close();
	        };

	      },
	      size: 'ls'
	    });
    };


  });
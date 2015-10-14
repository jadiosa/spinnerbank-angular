'use strict';

/**
 * @ngdoc function
 * @name spinnerBankAngularApp.controller:prodControler
 * @description
 * # prodControler
 * Controller of the spinnerBank
 */
spinnerBankAngularApp.controller('prodControler', function ($scope, productWebService, shared) {
	$scope.userIdNumber=36975248;
	$scope.selectedProduct = undefined;
	productWebService.products($scope.userIdNumber).success(
				function(data, config) {
					
					$scope.products = data;

			});

			$scope.productView = function() {
				if (typeof ($scope.selectedProduct) == 'undefined'
						|| angular.equals($scope.selectedProduct, "undefined")) {
					alert("Por favor seleccione un producto");
					return;
				}

				shared.selectedProduct($scope.selectedProduct);
				$location.url("/views/listaMovimientos");
				};
  });

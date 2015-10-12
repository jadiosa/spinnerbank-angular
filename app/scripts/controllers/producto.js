'use strict';

/**
 * @ngdoc function
 * @name spinnerBankAngularApp.controller:prodControler
 * @description
 * # prodControler
 * Controller of the spinnerBank
 */
spinnerBankAngularApp.controller('prodControler', function ($scope, productWebService, shared) {
	$scope.userIdNumber=1936941186;
	productWebService.products($scope.userIdNumber).success(
				function(data) {
					selectedProduct = undefined;
					$scope.products = data;

			});

			$scope.productView = function() {
				if (typeof ($scope.selectedProduct) == 'undefined'
						|| angular.equals($scope.selectedProduct, "undefined")) {
					alert("Por favor seleccione un producto");
					return;
				}

				shared.selectedProduct($scope.selectedProduct);
				$location.url("/views/detalles");
				};
  });

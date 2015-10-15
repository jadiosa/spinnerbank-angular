var spinner = angular.module('spinnerBankAngularApp');

/**
 * Variable que expone la ruta al Servicio Web que permite obtener los diferentes  productos que tiene un cliente con el banco.
 */
var PRODUCT_WEB_SERVICE = 'https://spinnerbank-api-external.herokuapp.com/productos/';

spinner.service("Servicioproducto", function($http) {
	
	/**
	Servicio web  para obtener los productos de un cliente
	**/
	this.obtenerProductos = function(userIdNumber) {
		return $http({
			method : 'GET',
			url : PRODUCT_WEB_SERVICE + userIdNumber
		});
	}
	});
angular.module('movimientos.services', [])

.factory('API', function($http) {
	var base = "https://spinnerbank-api-external.herokuapp.com";

	return {
		detalleMovimiento: function(id, cod) {
			return $http.get(base + '/detalleMov'), {
				method: 'GET',
				params: {
					idCliente: id,
					codProducto: cod
				}
			}
		}
	}

});
'use strict';

angular.module('principal.controllers',['usuario','asesor.services','Asesor'])
  // Controlador encargado de las funciones que se pueden realizar sobre
  // un producto 
  .controller('principalCtrl', function($scope, $location, $modal,UsuarioService,ApiAsesor,AsesorService) {

    $scope.imagenPersonal = UsuarioService.getImagen();
    $scope.nombre = UsuarioService.getNombre();
    $scope.access_token =UsuarioService.getAccess_token();
    $scope.idUsuario = 1936941186;

	$scope.inforAsesor = function() {
      ApiAsesor.obtenerInfoAsesor($scope.access_token, $scope.idUsuario)
              .success(function(data) {
              	console.log(data);
               //AsesorService.setImagen(data.picture);
               $location.url('/Principal');
              }).error(function (data, status) {
                  console.log(data);
              })
    };

  });
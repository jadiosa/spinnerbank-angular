'use strict';

angular.module('principal.controllers',['usuario'])
  // Controlador encargado de las funciones que se pueden realizar sobre
  // un producto
  .controller('principalCtrl', function($scope, $modal,UsuarioService) {

    $scope.imagenPersonal = UsuarioService.getImagen();
    $scope.nombre = UsuarioService.getNombre();


  });

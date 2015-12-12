'use strict';

angular.module('principal.controllers',['usuario','asesor.services','Asesor'])
  // Controlador encargado de las funciones que se pueden realizar sobre
  // un producto 
  .controller('principalCtrl', function($scope, $location, toastr, $modal,UsuarioService,ApiAsesor,AsesorService) {

    $scope.imagenPersonal = UsuarioService.getImagen();
    $scope.nombre = UsuarioService.getNombre();
    $scope.access_token =UsuarioService.getAccess_token();
    $scope.idUsuario = 1936941186;

	$scope.inforAsesor = function() {
    console.log('Entra al servicio infoAsesor');
      ApiAsesor.obtenerInfoAsesor($scope.access_token, $scope.idUsuario)
              .success(function(data) {
              	console.log(data);
                AsesorService.setNombreAsesor(data.fullName);
                AsesorService.setTipoDocumento(data.idType);
                AsesorService.setNumDocumento(data.id);
                AsesorService.setCorreo(data.email);
                AsesorService.setCelular(data.cellphone);
                AsesorService.setLatitud(data.lat);
                AsesorService.setLongitud(data.long);
                AsesorService.setFotoAsesor(data.photoUrl);
               $location.url('/asesor');
              }).error(function (data, status) {
                  console.log(data);
                  toastr.error('Lo sentimos, no podemos consultar la información de tu asesor');
              })
    };

  });

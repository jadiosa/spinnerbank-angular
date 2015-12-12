'use strict';

angular.module('asesor.controllers',['Asesor'])
  // Controlador encargado de las funciones que se pueden realizar sobre
  // un producto 
  .controller('AsesorCtrl', function($scope, $modal,AsesorService) {

    $scope.nombreAsesor = AsesorService.getNombreAsesor();
    console.log($scope.nombreAsesor);
    $scope.tipoDocumento = AsesorService.getTipoDocumento();
    $scope.numDocumento = AsesorService.getNumDocumento();
    $scope.correo = AsesorService.getCorreo();
    $scope.celular = AsesorService.getCelular();
  	$scope.direccion = AsesorService.getDireccion();
  	$scope.fotoAsesor = AsesorService.getFotoAsesor();
    $scope.myLatLng=AsesorService.getMyLatLng();    
    $scope.mapOptions={
        center:$scope.myLatLng,
        zoom:16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'),$scope.mapOptions);
    $scope.marker= new google.maps.Marker({
        position: $scope.myLatLng,
        map: map, 
        title:'Oficina'
    });
    $scope.marker.setMap(map);  
  });
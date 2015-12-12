'use strict';

angular.module('logOuth',['usuario'])
  // Controlador encargado de las funciones que se pueden realizar sobre
  // un producto 
  .controller('logOuthCont', function($scope, UsuarioService,$location) {
  	UsuarioService.setNombre('');
  	UsuarioService.setImagen('');
  	//window.location.replace('http://localhost:9000/#/'); 
  	window.location.replace('http://spinnerbank-angular.herokuapp.com/#/');
  	 });
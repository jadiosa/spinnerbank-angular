'use strict';

angular.module('logOuth',['usuario'])
  // Controlador encargado de las funciones que se pueden realizar sobre
  // un producto 
  .controller('logOuthCont', function($scope, UsuarioService,$location) {
  	UsuarioService.setNombre('');
  	UsuarioService.setImagen('');
  	//$location.url('http://localhost:9000');
  	//$location.path('/');
  	window.location.replace('http://localhost:9000/#/'); 
  	 });
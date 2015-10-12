'use strict';


/**
 * Variable que expone la ruta al Servicio Web que permite obtener los diferentes  productos que tiene un cliente con el banco.
 */
var PRODUCT_WEB_SERVICE = 'https://spinnerbank-api-external.herokuapp.com/productos/';
/**
 * @ngdoc overview
 * @name spinnerBankAngularApp
 * @description
 * # spinnerBankAngularApp
 *
 * Main module of the application.
 */
var spinnerBankAngularApp= angular.module('spinnerBankAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/principal.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/producto', {
        templateUrl: 'views/producto.html',
        controller: 'prodControler',
        controllerAs: 'producto'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/**
 * Servicio empleado para hacer uso del Servicio Web que permite
 * obtener el listado de productos del cliente identificado con userIdNumber
 */
    spinnerBankAngularApp.service('productWebService', function($http) {
    this.products = function(userIdNumber) {  
      return ($http({
        method : 'GET',
        url : PRODUCT_WEB_SERVICE+userIdNumber
      }));
    };
  });

spinnerBankAngularApp.service('shared', function() {
  var product= {};
  return {
    getProduct : function() {
      return product;
    },
    setProduct : function(value) {
      product = value;
    }
  };
});

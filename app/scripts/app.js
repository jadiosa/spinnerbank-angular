'use strict';

/**
 * @ngdoc overview
 * @name spinnerBankAngularApp
 * @description
 * # spinnerBankAngularApp
 *
 * Main module of the application.
 */
var spinnerBankAngularApp = angular.module('spinnerBankAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ui.bootstrap',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'productos.controllers',
    'productos.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/Principal.html',
        controller: 'prodControler',
        controllerAs: 'Producto'
      })
      .when('/producto', {
        templateUrl: 'views/Producto.html',
        controller: 'prodControler',
        controllerAs: 'Producto'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

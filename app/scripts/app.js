'use strict';

/**
 * @ngdoc overview
 * @name spinnerBankAngularApp
 * @description
 * # spinnerBankAngularApp
 *
 * Main module of the application.
 */
angular.module('spinnerBankAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngAnimate',
    'toastr',
    'ui.router',
    'satellizer',
    'ui.bootstrap',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'productos.controllers',
    'productos.services',
    'session.services',
    'principal.controllers',
    'LoginGoogle',
    'usuario',
    'logOuth'
  ])
  .config(function ($routeProvider,$authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/Login.html',
        controller: 'LoginCtrl',
        controllerAs: 'LoginCtrl'
      })
      .when('/producto', {
        templateUrl: 'views/Producto.html',
        controller: 'prodControler',
        controllerAs: 'ProdCtrl'
      })
      .when('/salir', {
        templateUrl: 'views/Login.html',
        controller: 'logOuthCont',
        controllerAs: 'LogOutCtrl'
      })
      .when('/Principal', {
        templateUrl: 'views/Principal.html',
        controller: 'principalCtrl',
        controllerAs: 'PrincipalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

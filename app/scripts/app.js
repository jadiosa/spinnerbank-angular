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
    'productos.services'
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
        controllerAs: 'Producto'
      })
      .when('/auth/google', {
        templateUrl: 'views/Producto.html',
        controller: 'prodControler',
        controllerAs: 'Producto'
      })
      .otherwise({
        redirectTo: '/'
      });

      $authProvider.google({
      clientId: '156258725894-rtcen6321lbh8hi9lf66hcsd1m6g0r4k.apps.googleusercontent.com',
      clientSecret:'zE5PlMYaVagDQQoOkVwTGBbp',
      callbackURL:'http://localhost:3000'
    });
  });

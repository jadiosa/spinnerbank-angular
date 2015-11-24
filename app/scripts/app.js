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
    'productos.services',
    'usuario'
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

      .when('/llamarApi', {
        templateUrl: '',
        controller: 'SecurityCtrl',
        controllerAs: 'SecurityCtrl'
      })
      .when('/state=:security_token&code=:accessToken', {

          template: 'views/Producto.html',
          controller: 'SecurityCtrl',
          controllerAs: 'SecurityCtrl'
       })
      .otherwise({
        redirectTo: '/'
      });

      $authProvider.google({
      clientId: '116421120632-otf7afrfqtfeiqlibtlatnou8964bge0.apps.googleusercontent.com',
      clientSecret:'lZ5cGSygNxc3EopNN04JU4JL',
      callbackURL:' http://spinnerbank-api-external.herokuapp.com/v1/oAuth2/code'
    });
  });

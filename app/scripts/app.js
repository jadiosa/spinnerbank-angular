'use strict';

/**
 * @ngdoc overview
 * @name spinnerBankAngularApp
 * @description
 * # spinnerBankAngularApp
 *
 * Main module of the application.
 */
angular
  .module('spinnerBankAngularApp', [
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

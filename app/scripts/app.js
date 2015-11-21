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

      .when('/llamarApi', {
        templateUrl: 'views/Producto.html',
        controller: 'SecurityCtrl',
        controllerAs: 'SecurityCtrl'
      })

      .when('/access_token=:accessToken', {
          template: '',
          controller: function ($location,$rootScope) {
            var hash = $location.path().substr(1);
           
           var splitted = hash.split('&');
           var params = {};
 
           for (var i = 0; i < splitted.length; i++) {
             var param  = splitted[i].split('=');
             var key    = param[0];
             var value  = param[1];
             params[key] = value;
             $rootScope.accesstoken=params;
           }
           $location.path("/llamarApi");
         }
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

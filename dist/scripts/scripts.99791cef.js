"use strict";angular.module("spinnerBankAngularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/principal.html",controller:"MainCtrl",controllerAs:"main"}).when("/producto",{templateUrl:"views/producto.html",controller:"prodControler",controllerAs:"producto"}).otherwise({redirectTo:"/"})}]),angular.module("spinnerBankAngularApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("spinnerBankAngularApp").controller("prodControler",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("spinnerBankAngularApp").run(["$templateCache",function(a){a.put("views/principal.html",'<div class="jumbotron"> <h1>SpinnerBank</h1> <img src="images/sober.3f648760.jpg" alt="I\'m Sober"><br><br> <p ng-grid="gridOptions"> somos un importante participante del sistema financiero Colombiano en prestamos a caninos. Contamos con un equipo de profesionales altamente calificados, con un gran compromiso de servicio hacia nuestros clientes y usuarios, apoyados por una plataforma operativa y tecnológica altamente eficiente. </p> </div>'),a.put("views/producto.html","<p>En esta vista se van a cargar los productos del cliente.</p>")}]);
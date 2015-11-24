"use strict";var spinnerBankAngularApp=angular.module("spinnerBankAngularApp",["ngAnimate","ngCookies","ngMessages","ngAnimate","toastr","ui.router","satellizer","ui.bootstrap","ngResource","ngRoute","ngSanitize","ngTouch","productos.controllers","productos.services","usuario"]).config(["$routeProvider","$authProvider",function(a,b){a.when("/",{templateUrl:"views/Login.html",controller:"LoginCtrl",controllerAs:"LoginCtrl"}).when("/producto",{templateUrl:"views/Producto.html",controller:"prodControler",controllerAs:"Producto"}).when("/auth/google",{templateUrl:"views/Producto.html",controller:"prodControler",controllerAs:"Producto"}).when("/llamarApi",{templateUrl:"",controller:"SecurityCtrl",controllerAs:"SecurityCtrl"}).when("/state=:security_token&code=:accessToken",{template:"views/Producto.html",controller:"SecurityCtrl",controllerAs:"SecurityCtrl"}).otherwise({redirectTo:"/"}),b.google({clientId:"116421120632-otf7afrfqtfeiqlibtlatnou8964bge0.apps.googleusercontent.com",clientSecret:"lZ5cGSygNxc3EopNN04JU4JL",callbackURL:" http://spinnerbank-api-external.herokuapp.com/v1/oAuth2/code"})}]);angular.module("productos.controllers",["productos.services"]).controller("prodControler",["$scope","API","$modal",function(a,b,c){a.id=1936941186,a.cod=1,b.obtenerProductos(a.id).success(function(b){a.productos=b}),a.detalles=function(a){c.open({templateUrl:"views/Detalle.html",controller:"modalControler",resolve:{producto:function(){return a}},size:"ls"})}}]).controller("modalControler",["$scope","$modalInstance","API","producto",function(a,b,c,d){c.detalleMovimientos(d.productId).success(function(b){a.detalles=b,a.productSelected=d,console.log(d)}),a.salirDetalle=function(){b.close()}}]),angular.module("productos.services",[]).factory("API",["$http",function(a){var b="https://spinnerbank-api-external.herokuapp.com";return{detalleMovimientos:function(c){return a.get(b+"/v1/transactions/"+c,{method:"GET"})},obtenerProductos:function(c){return a.get(b+"/v1/products/"+c+"/CC",{method:"GET"})},obtenerTokenApi:function(b){return a.get("http://spinnerbank-api-external.herokuapp.com/v1/oAuth2/accessToken",{method:"get",params:{code:b}})},obtenerInfoUsuario:function(b){return a.get("http://spinnerbank-api-external.herokuapp.com/v1/oAuth2/userInfo",{method:"get",params:{access_token:b}})}}}]),angular.module("spinnerBankAngularApp").controller("LoginCtrl",["$scope","$location","API","toastr","UsuarioService",function(a,b,c,d,e){a.token=location.search.substring(27),""!=a.token&&(e.setTokenGoogle(a.token),console.log("token Guardado= "+e.getTokenGoogle()),c.obtenerTokenApi(e.getTokenGoogle()).success(function(a){var b=a.access_token;console.log(a),c.obtenerInfoUsuario(b).success(function(a){}).error(function(a,b){})}).error(function(a,b,c){console.log(c)})),a.login=function(){var a="email",b="116421120632-otf7afrfqtfeiqlibtlatnou8964bge0.apps.googleusercontent.com",c="https://spinnerbank-angular.herokuapp.com",d="code",e="security_token",f="offline",g="force",h="https://accounts.google.com/o/oauth2/auth?scope="+a+"&client_id="+b+"&redirect_uri="+c+"&response_type="+d+"&state="+e+"&access_type="+f+"&approval_prompt="+g;window.location.replace(h)}}]),angular.module("usuario",[]).service("UsuarioService",function(){function a(a){f=a}function b(){return f}function c(a){g=a}function d(a){a=a}function e(){return h}var f="",g="",h={};return{setTokenGoogle:a,getTokenGoogle:b,setAccess_token:c,getAccess_token:c,setUsuario:d,getUsuario:e}}),angular.module("spinnerBankAngularApp").run(["$templateCache",function(a){a.put("views/Detalle.html",'<div> <div class="modal-header"> <center><h1>Detalles Movimientos</h1><center> </center></center></div> <div class="modal-body"> <div class="list-group"> <center> <h2>Producto</h2> </center> <table class="table"> <tr class="btn-primary"> <th>Nombre</th> <th>Tipo Producto</th> <th>Saldo</th> </tr> <tr> <td>{{productSelected.name}}</td> <td>{{productSelected.productType}}</td> <td>{{productSelected.balance | currency:"COP$ "}}</td> </tr> </table> <center> <h2>Movimientos</h2> </center> <table class="table"> <tr class="btn-primary"> <th>Fecha </th> <th>Descripción</th> <th>valor</th> </tr> <tr ng-repeat="detalle in detalles"> <td>{{detalle.date}}</td> <td>{{detalle.description}}</td> <td>{{detalle.value | currency:"COP$ "}}</td> </tr> </table> </div> <div class="alert alert-warning text-center" ng-show="detalles.length === 0"> No hay detalles de los movimientos de este producto </div> </div> <div class="modal-footer"> <button class="btn btn-default" ng-click="salirDetalle()">Salir</button> </div> <div></div></div>'),a.put("views/Login.html",'<div class="jumbotron"> <h1>SpinnerBank</h1> <img src="images/sober.3f648760.jpg" alt="I\'m Sober"><br><br> <p ng-grid="gridOptions"> Somos un importante participante del sistema financiero Colombiano en prestamos a caninos. Contamos con un equipo de profesionales altamente calificados, con un gran compromiso de servicio hacia nuestros clientes y usuarios, apoyados por una plataforma operativa y tecnológica altamente eficiente. </p> <div> <button class="btn btn-block btn-google-plus" ng-click="login()"> <span class="ion-social-googleplus"></span>Sign in with Google </button> </div> </div>'),a.put("views/Principal.html",'<div class="jumbotron"> <h1>SpinnerBank</h1> <img src="images/sober.3f648760.jpg" alt="I\'m Sober"><br><br> <p ng-grid="gridOptions"> Somos un importante participante del sistema financiero Colombiano en prestamos a caninos. Contamos con un equipo de profesionales altamente calificados, con un gran compromiso de servicio hacia nuestros clientes y usuarios, apoyados por una plataforma operativa y tecnológica altamente eficiente. </p> </div>'),a.put("views/Producto.html",'<!-- @author Jorge Atehortua --><!-- @email jorge.atehortua@gmail.com --><!-- Esta pagina HTML sera la encargada de llamar y mostrar\n los diferentes productos que estaran contenidos en la base\n de datos y que estan relacionados con un cliente--> <div class="container"> <h1 align="center">Listado de productos adquiridos por el cliente.</h1>   <div class="alert alert-warning text-center" ng-show="productos.length === 0"> Usted no tiene productos registrados </div> <!-- 	tabla para mostrar los archivos  --> <table class="table"> <tr class="btn-primary"> <th>Codigo producto</th> <th>Nombre del producto</th> <th>Tipo de producto</th> <th>Saldo</th> </tr> <!-- 		Columnas de la tabla aplicandoles diversos filtros de busqueda --> <tr class="fondo" ng-repeat="item in productos" ng-click="detalles(item)"> <td>{{item.productId}}</td> <td>{{item.name}}</td> <td>{{item.productType}}</td> <td>{{item.balance | currency:"COP$ "}}</td> </tr> </table> </div>')}]);
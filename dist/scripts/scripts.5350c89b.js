"use strict";angular.module("spinnerBankAngularApp",["ngAnimate","ngCookies","ngMessages","ngAnimate","toastr","ui.router","satellizer","ui.bootstrap","ngResource","ngRoute","ngSanitize","ngTouch","productos.controllers","productos.services","usuario","logOuth"]).config(["$routeProvider","$authProvider",function(a,b){a.when("/",{templateUrl:"views/Login.html",controller:"LoginCtrl",controllerAs:"LoginCtrl"}).when("/producto",{templateUrl:"views/Producto.html",controller:"prodControler",controllerAs:"Producto"}).when("/salir",{templateUrl:"views/Login.html",controller:"logOuthCont",controllerAs:"LogOutCont"}).when("/Principal",{templateUrl:"views/Principal.html",controller:"prodControler",controllerAs:"Producto"}).when("/auth/google",{templateUrl:"views/Producto.html",controller:"prodControler",controllerAs:"Producto"}).when("/llamarApi",{templateUrl:"",controller:"SecurityCtrl",controllerAs:"SecurityCtrl"}).when("/state=:security_token&code=:accessToken",{template:"views/Producto.html",controller:"SecurityCtrl",controllerAs:"SecurityCtrl"}).otherwise({redirectTo:"/"}),b.google({clientId:"116421120632-otf7afrfqtfeiqlibtlatnou8964bge0.apps.googleusercontent.com",clientSecret:"lZ5cGSygNxc3EopNN04JU4JL",callbackURL:" http://spinnerbank-api-external.herokuapp.com/v1/oAuth2/code"})}]),angular.module("productos.controllers",["productos.services","usuario"]).controller("prodControler",["$scope","API","$modal","UsuarioService",function(a,b,c,d){a.id=1936941186,a.cod=1,a.imagenPersonal=d.getImagen(),a.nombre=d.getNombre(),b.obtenerProductos(a.id).success(function(b){a.productos=b}),a.obtenerId=function(){return 1936941186},a.detalles=function(a){c.open({templateUrl:"views/Detalle.html",controller:"modalControler",resolve:{producto:function(){return a}},size:"ls"})}}]).controller("modalControler",["$scope","$modalInstance","API","producto",function(a,b,c,d){c.detalleMovimientos(d.productId).success(function(b){a.detalles=b,a.productSelected=d,console.log(d)}),a.salirDetalle=function(){b.close()}}]),angular.module("productos.services",[]).factory("API",["$http",function(a){var b="https://spinnerbank-api-external.herokuapp.com";return{detalleMovimientos:function(c){return a.get(b+"/v1/transactions/"+c,{method:"GET"})},obtenerProductos:function(c){return a.get(b+"/v1/products/"+c+"/CC",{method:"GET"})},obtenerTokenApi:function(b){return a.get("http://spinnerbank-api-external.herokuapp.com/v1/oAuth2/accessToken3",{method:"get",params:{code:b}})},obtenerInfoUsuario:function(b){return a.get("http://spinnerbank-api-external.herokuapp.com/v1/oAuth2/userInfo",{method:"get",params:{access_token:b}})}}}]),angular.module("spinnerBankAngularApp").controller("LoginCtrl",["$scope","$rootScope","$location","API","toastr","UsuarioService",function(a,b,c,d,e,f){a.token=location.search.substring(27,28),""!=a.token&&(a.token=a.token+"/"+location.search.substring(29),f.setTokenGoogle(a.token),d.obtenerTokenApi(f.getTokenGoogle()).success(function(a){var b=a.access_token;console.log("toke api: "+b),d.obtenerInfoUsuario(b).success(function(a){console.log("name: "+a.name),console.log("picture: "+a.picture)}).error(function(a,b){})}).error(function(a,b){console.log(a)})),a.login=function(){var a="email",b="116421120632-otf7afrfqtfeiqlibtlatnou8964bge0.apps.googleusercontent.com",c="https://spinnerbank-angular.herokuapp.com/",d="code",e="security_token",f="offline",g="force",h="https://accounts.google.com/o/oauth2/auth?scope="+a+"&client_id="+b+"&redirect_uri="+c+"&response_type="+d+"&state="+e+"&access_type="+f+"&approval_prompt="+g;window.location.replace(h)}}]),angular.module("logOuth",["usuario"]).controller("logOuthCont",["$scope","UsuarioService","$location",function(a,b,c){b.setNombre(""),b.setImagen(""),c.path("/")}]),angular.module("usuario",[]).service("UsuarioService",function(){function a(a){j=a}function b(){return j}function c(a){k=a}function d(a){a=a}function e(){return l}function f(){return m}function g(a){m=a}function h(){return n}function i(a){n=a}var j="",k="",l={},m="",n="";return{setTokenGoogle:a,getTokenGoogle:b,setAccess_token:c,getAccess_token:c,setUsuario:d,getUsuario:e,setImagen:g,getImagen:f,setNombre:i,getNombre:h}}),angular.module("spinnerBankAngularApp").run(["$templateCache",function(a){a.put("views/Detalle.html",'<div> <div class="modal-header"> <center><h1>Detalles Movimientos</h1><center> </center></center></div> <div class="modal-body"> <div class="list-group"> <center> <h2>Producto</h2> </center> <table class="table"> <tr class="btn-primary"> <th>Nombre</th> <th>Tipo Producto</th> <th>Saldo</th> </tr> <tr> <td>{{productSelected.name}}</td> <td>{{productSelected.productType}}</td> <td>{{productSelected.balance | currency:"COP$ "}}</td> </tr> </table> <center> <h2>Movimientos</h2> </center> <table class="table"> <tr class="btn-primary"> <th>Fecha </th> <th>Descripción</th> <th>valor</th> </tr> <tr ng-repeat="detalle in detalles"> <td>{{detalle.date}}</td> <td>{{detalle.description}}</td> <td>{{detalle.value | currency:"COP$ "}}</td> </tr> </table> </div> <div class="alert alert-warning text-center" ng-show="detalles.length === 0"> No hay detalles de los movimientos de este producto </div> </div> <div class="modal-footer"> <button class="btn btn-default" ng-click="salirDetalle()">Salir</button> </div> <div></div></div>'),a.put("views/Login.html",'<div class="jumbotron"> <h1>SpinnerBank</h1> <img src="images/sober.3f648760.jpg" alt="I\'m Sober"><br><br> <p ng-grid="gridOptions"> Somos un importante participante del sistema financiero Colombiano en prestamos a caninos. Contamos con un equipo de profesionales altamente calificados, con un gran compromiso de servicio hacia nuestros clientes y usuarios, apoyados por una plataforma operativa y tecnológica altamente eficiente. </p> <div> <button class="btn btn-block btn-google-plus" ng-click="login()"> <span class="ion-social-googleplus"></span>Sign in with Google </button> </div> </div>'),a.put("views/Principal.html",'<div class="jumbotron"> <h1>{{nombre}}</h1> <div class="container"> <img class="images" ng-src="{{imagenPersonal}}"> </div> </div>'),a.put("views/Producto.html",'<!-- @author Jorge Atehortua --><!-- @email jorge.atehortua@gmail.com --><!-- Esta pagina HTML sera la encargada de llamar y mostrar\n los diferentes productos que estaran contenidos en la base\n de datos y que estan relacionados con un cliente--> <div class="container"> <div class="alert alert-warning text-center" ng-show="nombre.length === 0"> debes logearte con google para ver tus productos </div> <div ng-show="nombre.length != 0"> <h1 align="center">Listado de productos adquiridos por el cliente.</h1>   <div class="alert alert-warning text-center" ng-show="productos.length === 0"> Usted no tiene productos registrados </div> <!-- 	tabla para mostrar los archivos  --> <table class="table"> <tr class="btn-primary"> <th>Codigo producto</th> <th>Nombre del producto</th> <th>Tipo de producto</th> <th>Saldo</th> </tr> <!-- 		Columnas de la tabla aplicandoles diversos filtros de busqueda --> <tr class="fondo" ng-repeat="item in productos" ng-click="detalles(item)"> <td>{{item.productId}}</td> <td>{{item.name}}</td> <td>{{item.productType}}</td> <td>{{item.balance | currency:"COP$ "}}</td> </tr> </table> </div> </div>')}]);
  angular.module('spinnerBankAngularApp')

   //Controlador encargo de realizar la autenticacion del usuario en el sistema
  .controller('LoginCtrl', function($scope, $location, $auth, API, toastr) {
   
    $scope.login2 = function() {
        
      API.loginGoogle2()
      .success(function(data) {
        toastr.success('Logeo exitoso');
        console.log('Login Correcto: ',data);
         // $location.path('/'); 
      }).error(function (data, status) {
          console.log('Error: ',data)
        })
    };

    // Funcion medinte la cual se envia la peticion a google para que solicite
    // al usuario permisos para acceder con si cuenta de google.
    $scope.login = function() {
        var scope = 'email';
        var client_id = '116421120632-otf7afrfqtfeiqlibtlatnou8964bge0.apps.googleusercontent.com';
        var redirect_uri = 'http://spinnerbank-api-external.herokuapp.com/v1/oAuth2/code';
        var response_type = 'code';
        var state = 'security_token';
        var access_type = 'offline';
        var approval_prompt = 'force';
        var url="https://accounts.google.com/o/oauth2/auth?scope="+
        scope+"&client_id="+client_id+"&redirect_uri="+redirect_uri+
       "&response_type="+response_type+"&state="+state+"&access_type="+
        access_type+"&approval_prompt="+approval_prompt;
        window.location.replace(url);
    };

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
          
          toastr.success('You have successfully signed in with ' + provider);
          $location.path('/');
        })
        .catch(function(provider) {
          console.log(provider);
          toastr.error(provider.data.message);
        });
    };
  });
  angular.module('spinnerBankAngularApp')

  .controller('LoginCtrl', function($scope, $location, $auth, API, toastr) {
   
    $scope.login = function() {
        
      API.loginGoogle()
      .success(function(data) {
        toastr.success('Logeo exitoso');
        console.log('Login Correcto: ',data);
         // $location.path('/'); 
      }).error(function (data, status) {
          console.log('Error: ',data)
        })
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
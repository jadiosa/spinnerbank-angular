angular.module('spinnerBankAngularApp')

  .controller('SecurityCtrl', function($rootScope, $scope, $location, API, toastr) {
     $scope.root=$rootScope;
     API.obtenerTokenApi($scope.root.accesstoken)
        .success(function(data) {
            var tokenApi = data.access_token;
            API.obtenerInfoUsuario(tokenApi)
              .success(function(data) {
               var infoUsuario = data
            
              }).error(function (data, status) {
                })
        }).error(function (data, status) {
          })
  });
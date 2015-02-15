'use strict';

angular.module('mmLandingPages')
  .controller('LoginCtrl', function ($scope , $state , $firebase, $firebaseSimpleLogin, $window) {
    var auth = new Firebase('https://resplendent-fire-5403.firebaseio.com/');
    $scope.admin = {};

    $scope.loginObj = $firebaseSimpleLogin(dataRef);
    console.log($scope.loginObj)
    $scope.login = function() {
        auth.authWithPassword({
          email    : $scope.admin.email,
          password : $scope.admin.password
        }, function(error, authData) {
            if (error) {
                alert(error);
            }
            else {
                console.log(true);
                $state.go('admin');
            }

        }, {
          remember: "sessionOnly"
        });
    }
  });

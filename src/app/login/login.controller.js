'use strict';

angular.module('mmLandingPages')
  .controller('LoginCtrl', function ($scope , $rootScope, $location , $firebase) {
    var ref = new Firebase('https://resplendent-fire-5403.firebaseio.com/');
    $scope.admin = {};
    $scope.login = function() {
        ref.authWithPassword({
          email    : $scope.admin.email,
          password : $scope.admin.password
        }, function(error, authData) {
            if (error) {
                alert(error);
            }
            else {
                console.log(true);
                $location.path('/admin');
            }

        }, {
          remember: "sessionOnly"
        });
    }
  });

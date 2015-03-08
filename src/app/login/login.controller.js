'use strict';

angular.module('mmLandingPages')
    .controller('LoginCtrl', function ($scope , $state , $firebase,  $firebaseAuth , $window, currentAuth, FIREBASE_URL) {
        var auth = new Firebase(FIREBASE_URL);
        $scope.admin = {};
        $scope.loginObj = $firebaseAuth();
        $scope.login = function() {
            auth.authWithPassword({
              email    : $scope.admin.email,
              password : $scope.admin.password
            }, function(error, authData) {
                if (error) {
                    $scope.errorormessage = error;
                }
                else {
                    $state.go('admin');
                }

            }, {
              remember: "sessionOnly"
            });
        }
    });

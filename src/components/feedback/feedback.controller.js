'use strict';

angular.module('mmLandingPages')
  .controller('feedbackCtrl', function ($scope, $firebase) {
    // $scope.date = new Date();
    var ref = new Firebase('https://resplendent-fire-5403.firebaseio.com/');
    $scope.users = $firebase(ref).$asArray();
    console.log($scope.users);
    $scope.feedbackSuccess = false;
    $scope.user = {};
    console.log($scope.user);
    $scope.addUser = function() {
        console.log($scope.user);
        $scope.users.$add($scope.user);
        $scope.feedbackSuccess = true;
    }
  });

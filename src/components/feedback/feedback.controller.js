'use strict';

angular.module('mmLandingPages')
  .controller('feedbackCtrl', function ($scope, $firebase) {
    var ref = new Firebase('https://resplendent-fire-5403.firebaseio.com/');
    $scope.users = $firebase(ref).$asArray();
    $scope.feedbackSuccess = false;
    $scope.user = {};
    $scope.addUser = function() {
        $scope.users.$add($scope.user);
        $scope.feedbackSuccess = true;
    }
  });

'use strict';

angular.module('mmLandingPages')
  .controller('MainCtrl', function ($scope , $firebase) {
    var ref = new Firebase('https://resplendent-fire-5403.firebaseio.com/');
    $scope.users = $firebase(ref).$asArray();
    $scope.user = {};
    $scope.addUser = function() {
        $scope.users.$add($scope.user);
    }
  });

'use strict';

angular.module('mmLandingPages')
  .controller('registerinterestCtrl', function ($scope, $firebase) {
    var ref = new Firebase('https://resplendent-fire-5403.firebaseio.com/');
    $scope.users = $firebase(ref).$asArray();

    // $scope.date = new Date();
    console.log($scope.users);
    // $scope.date = new Date();
    $scope.user = {};
    console.log($scope.user);
    $scope.addUser = function() {
        console.log($scope.user);
        $scope.users.$add($scope.user);
    }
  });

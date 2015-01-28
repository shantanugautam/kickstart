'use strict';

angular.module('mmLandingPages')
  .controller('MainCtrl', function ($scope , $firebase) {
    var ref = new Firebase('https://resplendent-fire-5403.firebaseio.com/');
    $scope.users = $firebase(ref).$asArray();
    console.log($scope.users);
    $scope.user = {};
    console.log($scope.user);
    $scope.addUser = function() {
        console.log($scope.user);
        $scope.users.$add($scope.user);
    }
  });
// function startWatch($scope) {
//   $scope.add = function() {
//     console.log($scope.newUser);
//     $scope.users.push($scope.newUser);
//     $scope.newUser = '';
//   }
// }

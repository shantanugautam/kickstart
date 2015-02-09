'use strict';

angular.module('mmLandingPages')
  .controller('AdminCtrl', function ($scope , $firebase) {
    var ref = new Firebase('https://resplendent-fire-5403.firebaseio.com/');
    $scope.results = $firebase(ref).$asArray();
    console.log($scope.results);
  });
// function startWatch($scope) {
//   $scope.add = function() {
//     console.log($scope.newUser);
//     $scope.users.push($scope.newUser);
//     $scope.newUser = '';
//   }
// }

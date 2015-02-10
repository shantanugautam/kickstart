'use strict';

angular.module('mmLandingPages')
  .controller('registerinterestCtrl', function ($scope, $firebase, $timeout, ngDialog) {
    var url = 'https://resplendent-fire-5403.firebaseio.com/' + window.location.path.split("/")[1] + '/usersinterested';
    var ref = new Firebase(url);
    $scope.users = $firebase(ref).$asArray();
    $scope.registerSuccess = false;
    $scope.user = {};
    $scope.addUser = function() {
        $scope.user.useragent = navigator.userAgent;
        $scope.user.referrer = document.referrer;
        $scope.user.domain = window.location.hostname;
        $scope.user.timestamp = Firebase.ServerValue.TIMESTAMP;
        $scope.users.$add($scope.user);
        $scope.registerSuccess = true;
        $timeout( function(){ ngDialog.close(); }, 3000);
    }
  });

'use strict';

angular.module('mmLandingPages')
  .controller('feedbackCtrl', function ($scope, $firebase, $location, $timeout, ngDialog) {
    // var base = $location.url().split("/")[1];
    var base = $location.path();
    console.log(base);
    var url = 'https://resplendent-fire-5403.firebaseio.com/' + base + '/usersnotinterested';
    var ref = new Firebase(url);
    $scope.users = $firebase(ref).$asArray();
    $scope.feedbackSuccess = false;
    $scope.user = {};
    $scope.addUser = function() {
        $scope.user.useragent = navigator.userAgent;
        $scope.user.referrer = document.referrer;
        $scope.user.domain = window.location.hostname;
        $scope.user.timestamp = Firebase.ServerValue.TIMESTAMP;
        $scope.users.$add($scope.user);
        $scope.feedbackSuccess = true;
        $timeout( function(){ ngDialog.close(); }, 3000);
    }


  });

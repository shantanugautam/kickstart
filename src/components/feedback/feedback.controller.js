'use strict';

angular.module('mmLandingPages')
  .controller('feedbackCtrl', function ($scope, $firebase, $location, $timeout, ngDialog, FIREBASE_URL) {
    var base = 'interest';
    var url = FIREBASE_URL + base + '/usersnotinterested';
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

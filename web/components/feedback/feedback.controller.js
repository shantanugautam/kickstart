'use strict';

angular.module('mmLandingPages')
  .controller('feedbackCtrl', function ($scope, $firebase, $timeout, ngDialog) {
    var url = 'https://resplendent-fire-5403.firebaseio.com/' + window.location.path + '/usersnotinterested';
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

'use strict';


angular.module('mmLandingPages')
  .controller('registerinterestCtrl', function ($scope, $firebase, $location, $timeout, ngDialog, FIREBASE_URL) {
    var base = 'interest';
    var url = FIREBASE_URL + base + '/usersinterested';
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
        window.fb_param = {}; // must be global by adding `window.`
        fb_param.pixel_id = '6021874300262';
        fb_param.value = '0.01';
        fb_param.currency = 'USD';
        (function(){
            var fpw = document.createElement('script'); fpw.async = true; fpw.src = '//connect.facebook.net/en_US/fp.js';
            var ref = document.getElementsByTagName('script')[0];
            ref.parentNode.insertBefore(fpw, ref);
        })();
        $timeout( function(){ ngDialog.close(); }, 3000);
    }
  });

'use strict';


angular.module('mmLandingPages')
    .controller('registerinterestCtrl', function ($scope, $firebase, $location, $timeout, ngDialog, FIREBASE_URL, BASE_SUBDOMAIN, FB_CONVID) {
        var ref = new Firebase(FIREBASE_URL + BASE_SUBDOMAIN + '/usersinterested');
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
            fb_param.pixel_id = FB_CONVID;
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

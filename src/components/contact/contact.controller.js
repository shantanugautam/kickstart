'use strict';


angular.module('mmLandingPages')
    .controller('contactCtrl', function ($scope, $firebase, $location, $timeout, ngDialog, FIREBASE_URL, BASE_SUBDOMAIN) {
        var ref = new Firebase(FIREBASE_URL + BASE_SUBDOMAIN + '/correspondence');
        $scope.requests = $firebase(ref).$asArray();
        $scope.requestSuccess = false;
        $scope.request = {};
        $scope.addRequest = function() {
            $scope.request.useragent = navigator.userAgent;
            $scope.request.referrer = document.referrer;
            $scope.request.domain = window.location.hostname;
            $scope.request.timestamp = Firebase.ServerValue.TIMESTAMP;
            $scope.requests.$add($scope.request);
            $scope.requestSuccess = true;
            $timeout( function(){ ngDialog.close(); }, 3000);
        }
    });

'use strict';

angular.module('mmLandingPages')
    .factory('usersFactory', function($firebase,FIREBASE_URL) {
        return {
            getInterestedUserBySubdomain : function(key) {
                return $firebase(new Firebase(FIREBASE_URL + '/' + key + '/usersinterested'))
            },
            getNotInterestedUserBySubdomain : function(key) {
                return $firebase(new Firebase(FIREBASE_URL + '/' + key + '/usersnotinterested'))
            },
            getQueriesUserBySubdomain : function(key) {
                return $firebase(new Firebase(FIREBASE_URL + '/' + key + '/correspondence'))
            }
        };
    });

'use strict';

angular.module('mmLandingPages',
    [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'firebase',
    'ui.router',
    'ngDialog'
    ])
    .constant('FIREBASE_URL', 'https://torrid-heat-4778.firebaseio.com/')
    .constant('BASE_SUBDOMAIN', 'interest')
    .constant('FB_CONVID', '6021874300262')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl',
                resolve: {
                    "currentAuth": function(Auth) {
                        return Auth.$waitForAuth();
                    }
                }
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'app/admin/admin.html',
                controller: 'AdminCtrl',
                resolve: {
                    "currentAuth": function(Auth) {
                        return Auth.$requireAuth();
                    }
                }
            });
            $urlRouterProvider.otherwise('/');
    })
    .run(function($rootScope, $location, $state) {
        $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
            if (error === "AUTH_REQUIRED") {
                $state.go('login');
            }
        });
    });

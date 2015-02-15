

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
    .constant('FIREBASE_URL', 'https://resplendent-fire-5403.firebaseio.com/')
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
                controller: 'LoginCtrl'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'app/admin/admin.html',
                controller: 'AdminCtrl'
            });
            $urlRouterProvider.otherwise('/');
    });

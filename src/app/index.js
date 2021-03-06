

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
  })
;



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
      });
    $urlRouterProvider.otherwise('/');
  })
;

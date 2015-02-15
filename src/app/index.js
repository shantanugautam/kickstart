

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
            });
            // .state('admin', {
            //     url: '/admin',
            //     templateUrl: 'app/admin/admin.html',
            //     controller: 'AdminCtrl',
            //     resolve: {
            //     // controller will not be loaded until $waitForAuth resolves
            //     // Auth refers to our $firebaseAuth wrapper in the example above
            //         "currentAuth": function(Auth) {
            //           // $waitForAuth returns a promise so the resolve waits for it to complete
            //           return Auth.$requireAuth();
            //         }
            //     }
            // });
            $urlRouterProvider.otherwise('/');
    })
    .run(function($rootScope, $location, $state) {
        $rootScope.$on("$routeChangeError", function(event, toState, toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $requireAuth promise is rejected
        // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
              $state.go('admin');
            }
        });
    });

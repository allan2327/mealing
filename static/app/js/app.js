(function() {
  'use strict';

  angular
    .module('mealing', [
      'ngResource',
      'ui.router',
    ]).
    config(function($locationProvider, $resourceProvider, $urlRouterProvider, $stateProvider) {
      $locationProvider.hashPrefix('!');

      $resourceProvider.defaults.stripTrailingSlashes = false;

      $urlRouterProvider.otherwise("/signin");

      $stateProvider
        .state('signup', {
          url: "/signup",
          templateUrl: "static/app/templates/signup.html",
          controller: 'SignUpController',
          controllerAs: 'vm',
        })
        .state('signin', {
          url: "/signin",
          templateUrl: "static/app/templates/signin.html",
          controller: 'SignInController',
          controllerAs: 'vm',
        })
        .state('signout', {
          url: "/signout",
          controller: 'SignOutController',
        })
    })
    .run(function($rootScope, $http, $window, $state) {
      $http.defaults.xsrfHeaderName = 'X-CSRFToken';
      $http.defaults.xsrfCookieName = 'csrftoken';

      // Ensure authentication
      //$rootScope.$on('$locationChangeSuccess', function() {
      //  if ($window.authRequired) {
      //    $state.go('login');
      //  }
      //});
    });
  
})();
'use strict';

angular.module('boilerplate', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngRoute',
  'ConfigModule'
  ])
  .config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {

    // Configure the application's routes
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/tv', {
        templateUrl: 'app/dashboard/tv/tv.html',
        controller: 'TvCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true).hashPrefix('!');
  } ]);

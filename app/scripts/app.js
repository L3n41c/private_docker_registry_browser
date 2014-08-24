'use strict';

/**
 * @ngdoc overview
 * @name privateDockerRegistryBrowserApp
 * @description
 * # privateDockerRegistryBrowserApp
 *
 * Main module of the application.
 */
angular
  .module('privateDockerRegistryBrowserApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/:host/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

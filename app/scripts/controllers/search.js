'use strict';

/**
 * @ngdoc function
 * @name privateDockerRegistryBrowserApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the privateDockerRegistryBrowserApp
 */
angular.module('privateDockerRegistryBrowserApp')
  .controller('SearchCtrl', function ($scope, $http, $routeParams) {

    $scope.search = function() {
      $http.get('http://' + $routeParams.host + '/v1/search?q=' + $scope.query).
        success(function (data) {
          $scope.searchResult = data;
        });
    };

    $scope.tags = [];

    $scope.getTags = function(repo) {
      $http.get('http://' + $routeParams.host + '/v1/repositories/' + repo + '/tags').
        success(function (data) {
          $scope.tags[repo] = data;
        });
    };

    $scope.predicate = 'name';
  });

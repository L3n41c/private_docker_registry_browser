'use strict';

/**
 * @ngdoc function
 * @name privateDockerRegistryBrowserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the privateDockerRegistryBrowserApp
 */
angular.module('privateDockerRegistryBrowserApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.validate = function() {
      $http.get('http://' + $scope.host + '/v1/_ping').
        success(function() {
          $scope.hostOk = true;
        }).
        error(function() {
          $scope.hostOk = false;
        });
    };
  });

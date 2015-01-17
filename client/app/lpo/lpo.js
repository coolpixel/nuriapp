'use strict';

angular.module('nuriappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/lpo', {
        templateUrl: 'app/lpo/lpo.html',
        controller: 'LpoCtrl'
      });
  });

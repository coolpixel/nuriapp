'use strict';

angular.module('nuriappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/keymap', {
        templateUrl: 'app/keymap/keymap.html',
        controller: 'KeymapCtrl'
      });
  });

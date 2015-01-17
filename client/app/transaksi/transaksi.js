'use strict';

angular.module('nuriappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/transaksi', {
        templateUrl: 'app/transaksi/transaksi.html',
        controller: 'TransaksiCtrl'
      });
  });

'use strict';

angular.module('nuriappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/barang', {
        templateUrl: 'app/barang/barang.html',
        controller: 'BarangCtrl'
      });
  });

'use strict';

describe('Controller: BarangCtrl', function () {

  // load the controller's module
  beforeEach(module('nuriappApp'));

  var BarangCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarangCtrl = $controller('BarangCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

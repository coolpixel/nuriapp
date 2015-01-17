'use strict';

describe('Controller: TransaksiCtrl', function () {

  // load the controller's module
  beforeEach(module('nuriappApp'));

  var TransaksiCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransaksiCtrl = $controller('TransaksiCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

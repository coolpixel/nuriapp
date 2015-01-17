'use strict';

describe('Controller: KeymapCtrl', function () {

  // load the controller's module
  beforeEach(module('nuriappApp'));

  var KeymapCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KeymapCtrl = $controller('KeymapCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

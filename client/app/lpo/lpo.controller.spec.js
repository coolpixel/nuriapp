'use strict';

describe('Controller: LpoCtrl', function () {

  // load the controller's module
  beforeEach(module('nuriappApp'));

  var LpoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LpoCtrl = $controller('LpoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

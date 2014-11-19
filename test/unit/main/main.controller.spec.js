'use strict';

describe('The Main controller', function() {
  var scope,
      MainCtrl;

  beforeEach(module('boilerplate'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should expose the correct properties to the view', inject(function() {
    expect(MainCtrl).not.toBeUndefined();
  }));

});

'use strict';

describe('The App config', function() {

  it('should setup the "/" route with the correct config', function() {
    module('boilerplate');
    inject(function($route) {
      expect($route.routes['/'].controller).toBe('MainCtrl');
      expect($route.routes['/'].templateUrl).toBe('app/main/main.html');
    });
  });

});

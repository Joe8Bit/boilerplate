'use strict';

describe('The boilerplate', function () {

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
  });

  it('should load the default root and view', function () {
    element.all(by.css('h1')).count().then(function(count) {
      expect(count).toBe(1);
    });
  });

});

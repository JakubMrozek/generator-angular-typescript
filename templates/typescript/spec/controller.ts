/// <reference path="../../../app/types/angular/angular.d.ts" />
/// <reference path="../../../app/types/angular/angular-mocks.d.ts" />
/// <reference path="../../../app/types/jasmine/jasmine.d.ts" />

'use strict';

describe('Controller: <%= _.classify(name) %>Ctrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('<%= _.camelize(appname) %>App'));

  var <%= _.classify(name) %>Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(function() {
    inject(function ($controller) {
      scope = {};
      <%= _.classify(name) %>Ctrl = $controller('<%= _.classify(name) %>Ctrl', {
        $scope: scope
      });
    });
  });

  it('...', function () {

  });
});
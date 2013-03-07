/// <reference path="../../../app/types/angular/angular.d.ts" />
/// <reference path="../../../app/types/angular/angular-mocks.d.ts" />
/// <reference path="../../../app/types/jasmine/jasmine.d.ts" />

'use strict';

describe('Controller: <%= _.classify(name) %>Ctrl', function () {

  var ctrl;

  beforeEach(function(){
    angular.mock.module('app');
    angular.mock.inject(function ($controller) {
      ctrl = $controller('<%= _.classify(name) %>Ctrl', {
        $scope: {}
      });
    });
  });


  it('...', function () {

  });
});
/// <reference path="../../../app/types/angular/angular.d.ts" />
/// <reference path="../../../app/types/angular/angular-mocks.d.ts" />
/// <reference path="../../../app/types/jasmine/jasmine.d.ts" />

/// <reference path="../../../app/scripts/controllers/<%= name.toLowerCase() %>.d.ts" />

'use strict';

describe('Controller: app.<%= name.toLowerCase() %>.Ctrl', function () {

  var ctrl: app.<%= name.toLowerCase() %>.Ctrl;

  beforeEach(function(){
    angular.mock.module('app');
    ctrl = new app.<%= name.toLowerCase() %>.Ctrl({
      $scope: {}
    });
  });


  it('...', function () {

  });
});
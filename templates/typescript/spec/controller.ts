/// <reference path="../../../app/types/angular/angular.d.ts" />
/// <reference path="../../../app/types/angular/angular-mocks.d.ts" />
/// <reference path="../../../app/types/jasmine/jasmine.d.ts" />

/// <reference path="../../../app/scripts/controller/<%= name.toLowerCase() %>.d.ts" />

'use strict';

describe('Controller: app.controller.<%= _.classify(name) %>', function () {

  var ctrl: app.controller.<%= _.classify(name) %>;

  beforeEach(function(){
    angular.mock.module('app');
    angular.mock.inject(function ($controller) {
      ctrl = $controller('app.controller.<%= _.classify(name) %>', {
        $scope: {}
      });
    });
  });


  it('...', function () {

  });
});
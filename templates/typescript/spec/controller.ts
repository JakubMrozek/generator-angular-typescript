/// <reference path="../../../app/types/lib/angular/angular.d.ts" />
/// <reference path="../../../app/types/lib/angular/angular-mocks.d.ts" />
/// <reference path="../../../app/types/lib/jasmine/jasmine.d.ts" />

/// <reference path="../../../app/scripts/controllers/<%= name.toLowerCase() %>.ts" />

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
/// <reference path="../../../app/types/lib/angular/angular.d.ts" />
/// <reference path="../../../app/types/lib/angular/angular-mocks.d.ts" />
/// <reference path="../../../app/types/lib/jasmine/jasmine.d.ts" />

/// <reference path="../../../app/scripts/services/<%= name.toLowerCase() %>.ts" />

'use strict';

describe('Service: app.service.<%= _.classify(name) %>', function () {

  var service: app.service.<%= _.classify(name) %>;

  beforeEach(function(){
    angular.mock.module('app');
    angular.mock.inject(function(_<%= _.camelize(name) %>_) {
      service = _<%= _.camelize(name) %>_;
    })
  });

  it('...', function () {
    expect(!!service).toBe(true);
  });

});
/// <reference path="../../../app/types/angular/angular.d.ts" />
/// <reference path="../../../app/types/angular/angular-mocks.d.ts" />
/// <reference path="../../../app/types/jasmine/jasmine.d.ts" />

'use strict';

describe('Service: <%= _.camelize(name) %>', function () {

  // load the service's module
  beforeEach(angular.mock.module('app.service'));

  // instantiate service
  var <%= _.camelize(name) %>;
  beforeEach(angular.mock.inject(function(_<%= _.camelize(name) %>_) {
    <%= _.camelize(name) %> = _<%= _.camelize(name) %>_;
  }));

  it('should do something', function () {
    expect(!!<%= _.camelize(name) %>).toBe(true);
  });

});

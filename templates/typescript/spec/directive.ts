/// <reference path="../../../app/types/lib/angular/angular.d.ts" />
/// <reference path="../../../app/types/lib/angular/angular-mocks.d.ts" />
/// <reference path="../../../app/types/lib/jasmine/jasmine.d.ts" />

/// <reference path="../../../app/scripts/directives/<%= name.toLowerCase() %>.ts" />

'use strict';

describe('Directive: <%= _.camelize(name) %>', function () {
  beforeEach(angular.mock.module('app'));

  var element;

  it('should make hidden element visible', angular.mock.inject(function ($rootScope, $compile) {
    element = angular.element('<<%= _.dasherize(name) %>></<%= _.dasherize(name) %>>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the <%= _.camelize(name) %> directive');
  }));
});
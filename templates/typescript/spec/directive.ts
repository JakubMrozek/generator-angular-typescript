/// <reference path="../../../app/types/angular/angular.d.ts" />
/// <reference path="../../../app/types/angular/angular-mocks.d.ts" />
/// <reference path="../../../app/types/jasmine/jasmine.d.ts" />

'use strict';

describe('Directive: <%= _.camelize(name) %>', function () {
  beforeEach(angular.mock.module('<%= _.camelize(appname) %>App'));

  var element;

  it('should make hidden element visible', angular.mock.inject(function ($rootScope, $compile) {
    element = angular.element('<<%= _.dasherize(name) %>></<%= _.dasherize(name) %>>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the <%= _.camelize(name) %> directive');
  }));
});
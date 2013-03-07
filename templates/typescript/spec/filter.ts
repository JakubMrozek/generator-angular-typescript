/// <reference path="../../../app/types/angular/angular.d.ts" />
/// <reference path="../../../app/types/angular/angular-mocks.d.ts" />
/// <reference path="../../../app/types/jasmine/jasmine.d.ts" />
'use strict';

describe('Filter: <%= _.camelize(name) %>', function () {

  // load the filter's module
  beforeEach(angular.mock.module('app.filter'));

  // initialize a new instance of the filter before each test
  var <%= _.camelize(name) %>;
  beforeEach(angular.mock.inject(function($filter) {
    <%= _.camelize(name) %> = $filter('<%= _.camelize(name) %>');
  }));

  it('should return the input prefixed with "<%= _.camelize(name) %> filter:"', function () {
    var text = 'angularjs';
    expect(<%= _.camelize(name) %>(text)).toBe('<%= _.camelize(name) %> filter: ' + text);
  });

});

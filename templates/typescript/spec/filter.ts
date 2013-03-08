/// <reference path="../../../app/types/angular/angular.d.ts" />
/// <reference path="../../../app/types/angular/angular-mocks.d.ts" />
/// <reference path="../../../app/types/jasmine/jasmine.d.ts" />

'use strict';

describe('Filter: <%= _.camelize(name) %>', function () {

  var filter;

  beforeEach(function(){
    angular.mock.module('app');
    angular.mock.inject(function($filter) {
      filter = $filter('<%= _.camelize(name) %>');
    })
  });

  it('...', function () {
    var text = 'angularjs';
    expect(filter(text)).toBe('<%= _.camelize(name) %> filter: ' + text);
  });

});

/// <reference path="../../../app/components/types/angularjs/angular.d.ts" />
/// <reference path="../../../app/components/types/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../app/components/types/jasmine/jasmine.d.ts" />

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

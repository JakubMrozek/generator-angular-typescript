/// <reference path="../../types/angular/angular.d.ts" />

'use strict';

angular.module('app.filter')
  .filter('<%= _.camelize(name) %>', [function () {
    return function (input: string) {
      return '<%= _.camelize(name) %> filter: ' + input;
    };
  }]);

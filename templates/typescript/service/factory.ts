/// <reference path="../../types/angular/angular.d.ts" />

'use strict';

angular.module('app.service')
  .factory('<%= _.camelize(name) %>', [function() {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function() {
        return meaningOfLife;
      }
    };
  }]);

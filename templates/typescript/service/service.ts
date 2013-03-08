/// <reference path="../../types/lib/angular/angular.d.ts" />

'use strict';

angular.module('app.service')
  .service('<%= _.camelize(name) %>', function <%= _.camelize(name) %>() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });

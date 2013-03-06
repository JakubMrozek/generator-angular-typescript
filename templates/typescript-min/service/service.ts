/// <reference path="../../types/angular/angular.d.ts" />

'use strict';

angular.module('<%= _.camelize(appname) %>App')
  .service('<%= _.camelize(name) %>', function <%= _.camelize(name) %>() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });

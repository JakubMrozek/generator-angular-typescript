/// <reference path="../../types/angular/angular.d.ts" />

'use strict';

angular.module('<%= _.camelize(appname) %>App')
  .constant('<%= _.camelize(name) %>', 42);

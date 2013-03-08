/// <reference path="../../types/lib/angular/angular.d.ts" />

'use strict';

angular.module('app.service')
  .value('<%= _.camelize(name) %>', 42);

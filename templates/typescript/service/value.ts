/// <reference path="../../types/lib/angularjs/angular.d.ts" />

'use strict';

angular.module('app.service')
  .value('<%= _.camelize(name) %>', 42);

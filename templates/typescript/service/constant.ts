/// <reference path="../../types/lib/angularjs/angular.d.ts" />

'use strict';

angular.module('app.service')
  .constant('<%= _.camelize(name) %>', 42);

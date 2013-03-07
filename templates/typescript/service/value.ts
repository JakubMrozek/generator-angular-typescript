/// <reference path="../../types/angular/angular.d.ts" />

'use strict';

angular.module('app.service')
  .value('<%= _.camelize(name) %>', 42);

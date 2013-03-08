/// <reference path="../../types/lib/angular/angular.d.ts" />

'use strict';

angular.module('app.service')
  .constant('<%= _.camelize(name) %>', 42);

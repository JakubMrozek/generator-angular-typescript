/// <reference path="../app.ts" />

'use strict';

angular.module('app.service')
  .value('<%= _.camelize(name) %>', 42);

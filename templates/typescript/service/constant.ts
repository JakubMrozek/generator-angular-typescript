/// <reference path="../app.ts" />

'use strict';

angular.module('app.service')
  .constant('<%= _.camelize(name) %>', 42);

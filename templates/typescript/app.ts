/// <reference path="../types/angular/angular.d.ts" />

'use strict';

angular.module('app', [])
  .config(['$routeProvider', function ($routeProvider: ng.IRouteProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: app.main.Ctrl
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

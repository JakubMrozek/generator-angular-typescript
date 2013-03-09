/// <reference path="../types/lib/angularjs/angular.d.ts" />

'use strict';

angular.module('app.controller', []);
angular.module('app.directive', []);
angular.module('app.filter', []);
angular.module('app.service', []);

angular.module('app', [
  'app.controller',
  'app.directive',
  'app.filter',
  'app.service'
]);

angular.module('app').config(['$routeProvider', function routes($routeProvider: ng.IRouteProvider) {
    $routeProvider.when('/', { templateUrl: 'views/main.html', controller: 'app.main.Ctrl'})
    $routeProvider.otherwise({ redirectTo: '/'});
  }
]);

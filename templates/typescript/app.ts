'use strict';

angular.module('<%= _.camelize(appname) %>App', [])
  .config(function ($routeProvider: ng.IRouteProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

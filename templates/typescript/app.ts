/// <reference path="../components/types/angularjs/angular.d.ts" />

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


module app {

  export module controller {}

  export module directive {}

  export module filter {}

  export module service {}

  /**
   * Rozhrani pro vsechny controllery.
   */
  export interface IController {}

  /**
   * Rozhrani pro vsechny direktivy.
   */
  export interface IDirective {}

  /**
   * Rozhrani pro vsechny filtry
   */
  export interface IFilter {
    filter (input: string): string;
  }

  /**
   * Rozhrani pro vsechny sluzby.
   */
  export interface IService {}

  /**
   * Registrace noveho controlleru.
   *
   * @param className
   * @param services
   */
  export function registerController (className: string, services? = []) {
    var controller = 'app.controller.' + className;
    services.push(app.controller[className]);
    angular.module('app.controller').controller(controller, services);
  }

  /**
   * Registrace nove direktivy.
   *
   * @param className
   * @param services
   */
  export function registerDirective (className: string, services? = []) {
    var directive = className.toLowerCase();
    services.push(function(){
      return new app.directive[className]();
    });
    angular.module('app.directive').directive(directive, services);
  }

  /**
   * Registrace noveho filtru.
   *
   * @param className
   * @param services
   */
  export function registerFilter (className: string, services? = []) {
    var filter = className.toLowerCase();
    services.push(function(){
      var obj = new app.filter[className]();
      return obj.filter;
    });
    angular.module('app.filter').filter(filter, services);
  }

  /**
   * Registrace nove sluzby.
   *
   * @param className
   * @param services
   */
  export function registerService (className: string, services? = []) {
    var service = className.toLowerCase();
    services.push(function(){
      return new app.service[className]();
    });
    angular.module('app.service').factory(service, services);
  }
}
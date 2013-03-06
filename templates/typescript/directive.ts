/// <reference path="../../types/angular/angular.d.ts" />

'use strict';

angular.module('<%= _.camelize(appname) %>App')
  .directive('<%= _.camelize(name) %>', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope: ng.IScope, element: JQuery, attrs: ng.IAttributes) {
        element.text('this is the <%= _.camelize(name) %> directive');
      }
    };
  });

/// <reference path="../../types/angular/angular.d.ts" />

'use strict';

module app.directive {

  /**
   *
   */
  export class <%= _.classify(name) %> {

    /**
     *
     * @type {string}
     */
    template = '<div></div>';

    /**
     *
     * @type {string}
     */
    restrict = 'E';

    /**
     *
     * @returns {app.directives.<%= _.classify(name) %>}
     */
    static factory(): <%= _.classify(name) %> {
      var directive = new <%= _.classify(name) %>();
      return directive;
    }

    /**
     *
     * @param scope
     * @param element
     * @param attrs
     */
    link(scope, element: JQuery, attrs: ng.IAttributes) {
      element.text('this is the <%= _.camelize(name) %> directive');
    }

  }

}


angular
  .module('app.directive')
  .directive('<%= _.camelize(name) %>', [app.directive.<%= _.classify(name) %>.factory]);
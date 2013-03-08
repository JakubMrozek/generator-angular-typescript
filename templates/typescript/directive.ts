/// <reference path="../../types/angular/angular.d.ts" />
/// <reference path="../../types/app.d.ts" />

'use strict';

module app.directive {

  /**
   *
   */
  export class <%= _.classify(name) %> implements IDirective {

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
     * @param scope
     * @param element
     * @param attrs
     */
    link(scope, element: JQuery, attrs: ng.IAttributes) {
      element.text('this is the <%= _.camelize(name) %> directive');
    }

  }

}


angular.module('app.directive').directive('<%= _.camelize(name) %>', [function(){
  return new app.directive.<%= _.classify(name) %>();
}]);
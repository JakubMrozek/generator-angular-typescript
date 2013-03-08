/// <reference path="../../types/angular/angular.d.ts" />
/// <reference path="../../types/app.d.ts" />

'use strict';

module app.filter {

  /**
   *
   */
  export class <%= _.classify(name) %> implements IFilter {

    /**
     *
     */
    constructor() {

    }

    /**
     *
     * @param input
     * @returns {string}
     */
    filter (input: string) {
      return '<%= _.camelize(name) %> filter: ' + input;
    }

  }

}


angular.module('app.filter').filter('<%= _.camelize(name) %>', [function(){
  var obj = new app.filter.<%= _.classify(name) %>();
  return obj.filter;
}]);




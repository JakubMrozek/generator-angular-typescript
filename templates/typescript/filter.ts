/// <reference path="../../types/angular/angular.d.ts" />

'use strict';

module app {

  export interface IFilter {
    filter (input: string): string;
  }

}


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




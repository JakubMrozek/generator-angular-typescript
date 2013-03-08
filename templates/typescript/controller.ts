/// <reference path="../../types/angular/angular.d.ts" />

'use strict';

module app.controller {

  /**
   *
   */
  export class <%= _.classify(name) %> {

   /**
    *
    * @param $scope
    */
    constructor(private $scope) {

    }

  }

}


angular.module('app.controller').controller('app.controller.<%= _.classify(name) %>', [
  '$scope', app.controller.<%= _.classify(name) %>
]);
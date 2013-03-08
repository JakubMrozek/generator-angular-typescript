/// <reference path="../../types/angular/angular.d.ts" />
/// <reference path="../../types/app.d.ts" />

'use strict';

module app.controller {

  /**
   *
   */
  export class <%= _.classify(name) %> implements IController {

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
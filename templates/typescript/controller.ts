/// <reference path="../app.ts" />

'use strict';

module app.controller {

  export class <%= _.classify(name) %> implements IController {

    constructor (private $scope) {

    }

  }

}

app.registerController('<%= _.classify(name) %>', ['$scope']);
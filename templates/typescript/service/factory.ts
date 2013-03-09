/// <reference path="../../types/lib/angularjs/angular.d.ts" />
/// <reference path="../../types/app.d.ts" />

'use strict';

module app.service {

  export class <%= _.classify(name) %> implements IService {

    private meaningOfLife = 42;

    constructor () {

    }

    someMethod () {
      return this.meaningOfLife;
    }

  }

}


angular.module('app.service').factory('<%= _.camelize(name) %>', [function(){
  return new app.service.<%= _.classify(name) %>();
}]);
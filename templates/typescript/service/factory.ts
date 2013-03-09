/// <reference path="../app.ts" />

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

app.registerService('<%= _.classify(name) %>', []);
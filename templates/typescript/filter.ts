/// <reference path="../app.ts" />

'use strict';

module app.filter {

  export class <%= _.classify(name) %> implements IFilter {

    filter (input: string) {
      return '<%= _.camelize(name) %> filter: ' + input;
    }

  }

}

app.registerFilter('<%= _.classify(name) %>', []);




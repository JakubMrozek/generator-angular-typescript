/// <reference path="../app.ts" />

'use strict';

module app.directive {

  export class <%= _.classify(name) %> implements IDirective {

    template = '<div></div>';

    restrict = 'E';

    link (scope, element: JQuery, attrs: ng.IAttributes) {
      element.text('this is the <%= _.camelize(name) %> directive');
    }

  }

}

app.registerDirective('<%= _.classify(name) %>', []);
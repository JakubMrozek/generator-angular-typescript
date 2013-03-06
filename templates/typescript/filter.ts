'use strict';

angular.module('<%= _.camelize(appname) %>App')
  .filter('<%= _.camelize(name) %>', function () {
    return function (input: string) {
      return '<%= _.camelize(name) %> filter: ' + input;
    };
  });

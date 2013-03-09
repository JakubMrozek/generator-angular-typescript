/// <reference path="../app.ts" />

'use strict';

angular.module('app.service')
  .provider('<%= _.camelize(name) %>', [function() {

    // Private variables
    var salutation = 'Hello';

    // Private constructor
    function Greeter() {
      this.greet = function() {
        return salutation;
      };
    }

    // Public API for configuration
    this.setSalutation = function(s) {
      salutation = s;
    };

    // Method for instantiating
    this.$get = function() {
      return new Greeter();
    };
  }]);

'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');


var Generator = module.exports = function Generator() {
  yeoman.generators.Base.apply(this, arguments);
  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());

  var args = ['main'];

  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'component.json')).appPath;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'app';
  }
  this.appPath = this.env.options.appPath;

  this.option('typescript');
  this.options.typescript = true;
  this.env.options.typescript = this.options.typescript;

  if (typeof this.env.options.minsafe === 'undefined') {
    this.option('minsafe');
    this.env.options.minsafe = this.options.minsafe;
    args.push('--minsafe');
  }

  this.hookFor('angular:common', {
    args: args
  });

  this.hookFor('angular:main', {
    args: args
  });

  this.hookFor('angular:controller', {
    args: args
  });

  this.hookFor('testacular:app', {
    args: [false] // run testacular hook in non-interactive mode
  });

  this.on('end', function () {
    console.log('\nI\'m all done. Just run ' + 'npm install && bower install --dev'.bold.yellow + ' to install the required dependencies.');
  });

  this.bootstrap = false;
  this.compassBootstrap = false;
  this.resourceModule = true;
  this.cookiesModule = false;
  this.sanitizeModule = false;
};

util.inherits(Generator, yeoman.generators.NamedBase);


Generator.prototype.createIndexHtml = function createIndexHtml() {
  this.template('../../templates/common/index.html', path.join(this.appPath, 'index.html') );
};

Generator.prototype.packageFiles = function () {
  this.template( '../../templates/common/component.json', 'component.json' );
  this.template( '../../templates/common/package.json', 'package.json' );
  this.template( '../../templates/common/Gruntfile.js', 'Gruntfile.js' );
};

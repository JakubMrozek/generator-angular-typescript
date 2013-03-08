# Imatic Software devel stack

Vychází z projektu https://github.com/yeoman/generator-angular. Úvodní info zde: http://weblog.ronnieweb.net/2013/03/yeoman-pro-angularjs-a-typescript/.

## Instalace

```bash
npm install yo grunt-cli bower testacular -g
npm install git://github.com/JakubMrozek/generator-angular-typescript.git
yo angular --typescript
npm install && bower install
```

## Příkazy

* grunt server - spuštění pro vývoj
* grunt test - spuštění všech testů
* grunt testacular:unit - spuštění Testacularu pro unit testy s auto refresh
* grunt build - build nového projektu (minifikace, optimalizace atd.).


## Scaffolding

### Controllery

```bash
yo angular:controller Ctrl
```

```javascript
/// <reference path="../../types/angular/angular.d.ts" />
/// <reference path="../../types/app.d.ts" />

'use strict';

module app.controller {

  export class Ctrl implements IController {

    constructor(private $scope) {

    }

  }

}


angular.module('app.controller').controller('app.controller.Ctrl', [
  '$scope', app.controller.Ctrl
]);
```



## Více informací

http://weblog.ronniweb.net


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)


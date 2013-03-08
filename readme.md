# Imatic Software devel stack

* Úvodní info zde: http://weblog.ronnieweb.net/2013/03/yeoman-pro-angularjs-a-typescript/.
* Vychází z projektu https://github.com/yeoman/generator-angular.

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

Kromě samotných controllerů, direktiv, filtrů a servisů vygenerují i příslušné testy.

### Controllery

Příkaz:

```bash
yo angular:controller Ctrl --typescript
```

Vygeneruje soubor app/scripts/controllers/ctrl.ts:

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

### Direktivy

Příkaz:

```bash
yo angular:directive dir --typescript
```

Vygeneruje soubor app/scripts/directives/dir.ts:

```javascript
/// <reference path="../../types/angular/angular.d.ts" />
/// <reference path="../../types/app.d.ts" />

'use strict';

module app.directive {

  export class Dir implements IDirective {

    template = '<div></div>';

    restrict = 'E';

    link(scope, element: JQuery, attrs: ng.IAttributes) {
      element.text('this is the dir directive');
    }

  }

}


angular.module('app.directive').directive('dir', [function(){
  return new app.directive.Dir();
}]);
```

### Filtry

Příkaz:

```bash
yo angular:filter fil --typescript
```

Vygeneruje soubor app/scripts/filters/fil.ts:

```javascript
/// <reference path="../../types/angular/angular.d.ts" />
/// <reference path="../../types/app.d.ts" />

'use strict';

module app.filter {

  export class Fil implements IFilter {

    filter (input: string) {
      return 'fil filter: ' + input;
    }

  }

}


angular.module('app.filter').filter('fil', [function(){
  var obj = new app.filter.Fil();
  return obj.filter;
}]);
```

### Servisy

Příkaz:

```bash
yo angular:service serv --typescript
```

Vygeneruje soubor app/scripts/services/serv.ts:

```javascript
/// <reference path="../../types/angular/angular.d.ts" />
/// <reference path="../../types/app.d.ts" />

'use strict';

module app.service {

  export class Serv implements IService {

    private meaningOfLife = 42;

    constructor () {

    }

    someMethod() {
      return this.meaningOfLife;
    }

  }

}


angular.module('app.service').factory('serv', [function(){
  return new app.service.Serv();
}]);
```



## Více informací

http://weblog.ronniweb.net


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)


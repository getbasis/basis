# Basis
A lightweight responsive Stylus/CSS framework based on flexible box.

<img src="https://avatars0.githubusercontent.com/u/18589717?v=3&s=200" alt="Basis" width="100" />

* Document: http://getbasis.github.io/
* GitHub: https://github.com/getbasis/basis/
* Release: https://github.com/getbasis/basis/releases/

## Why it's awesome?

* Basis isn't about a UI framework. Basis provides only basic frame of components. So you build a responsive web page quickly and easy to overwrite with your Stylus or CSS.
* CSS architecture of Basis is [FLOCSS](https://github.com/hiloki/flocss). So it is possible a modular approach.
* Basis has incorporated the concept of vertical rhythm. So you can be a good-balanced design.
* Basis has many mixins. Usufule mixins and abstract mixin of compornents.

## Demo ( HTML5 Templates )
* integrity: http://getbasis.github.io/integrity/
* improve: http://getbasis.github.io/improve/
* affinity: http://getbasis.github.io/affinity/

## Get started

### Using Yarn

Installs Basis
```
$ yarn install getbasis
```

Imports Basis. your Stylus.
```
/* If you want to use Basis classes */
@import node_modules/getbasis/src/css/basis;

/* If you want to use Basis mixins only */
@import node_modules/getbasis/src/css/basis-core;
```

Imports JavaScripts ( Require jQuery )
```
import 'node_modules/getbasis/src/js/basis.js';
```

### Download from GitHub

Downloads the basis from https://github.com/getbasis/basis/releases

Imports Basis your Stylus.
```
/* If you want to use Basis classes */
@import basis/src/css/basis;

/* If you want to use Basis mixins only */
@import basis/src/css/basis-core;
```

or Just this link.
```
<link rel="stylesheet" href="basis/dist/css/basis.min.css">
```

Loads JavaScripts
```
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<script src="node_modules/getbasis/dist/js/basis.min.js"></script>
```

### Sample for using Basis classes
```
<a class="_c-btn _c-btn--block">Btn</a>
```

### Sample for using Basis abstracts
```
.c-btn {
  @include _c-btn({
    background-color: #fff,
    border: 1px solid #ddd,
  });

  &--block {
    display: block;
  }
}
```
```
<a class="c-btn c-btn--block">Btn</a>
```

### Option

Support IE9 ( Not perfect )

```html
<!--[if lt IE 10]>
<link rel="stylesheet" href="node_modules/getbasis/dist/css/plugin/basis-ie9/basis-ie9.min.css" />
<![endif]-->
```

And support IE8 ( Not perfect )

```html
<!--[if lt IE 9]>
<script src="node_modules/html5shiv/dist/html5shiv.js"></script>
<![endif]-->
```

## Browser support
Modern Browser and IE10+

## How to contribute

Please make an issue if there is a problem and needs.
Please don't make the new issue if the issue of the same content already exists.
If you can coding, please give me a pull request.
But, please do not send in the master branch.
Pull request sent to the master branch doesn't merge.

## License

MIT License

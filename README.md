# Basis
A lightweight responsive Stylus/CSS framework based on flexible box.

<img src="https://avatars0.githubusercontent.com/u/18589717?v=3&s=200" alt="Basis" width="100" />

* Document: http://getbasis.github.io/
* GitHub: https://github.com/getbasis/basis/
* Release: https://github.com/getbasis/basis/releases/

## Why it's awesome?

* Basis isn't about a UI framework. Basis provides only basic frame of components. So you build a responsive web page quickly and easy to overwrite with your stylus or css.
* CSS architecture of Basis is [FLOCSS](https://github.com/hiloki/flocss). So it is possible a modular approach.
* Basis has incorporated the concept of vertical rhythm. So you can be a good-balanced design.
* Flexible grid system. Clean because using a flexible box.
* highly extensible. The core is only the basic components, it can be extended with [add-on](https://github.com/getbasis).

## Demo ( HTML5 Templates )
* integrity: http://getbasis.github.io/integrity/
* improve: http://getbasis.github.io/improve/
* affinity: http://getbasis.github.io/affinity/

## Get started

### Using npm

1. ```$ npm install getbasis```
2. Import basis.styl your Stylus.
```styl
@import /PATH/TO/node_modules/getbasis/src/stylus/basis;
```

IF you want to use build files, just do this.

```shell
$ cd /PATH/TO/getbasis
$ npm install
$ npm run gulp build
```

### Download from GitHub

1. Download the basis from https://github.com/getbasis/basis/releases
2. Import basis.styl your Stylus.
```styl
@import /PATH/TO/basis/src/stylus/basis;
```
or Just this link.
```html
<link rel="stylesheet" href="/PATH/TO/basis/dist/css/basis.min.css" />
```

### Option

Support IE9 ( Not perfect )

```html
<!--[if lt IE 10]>
<link rel="stylesheet" href="/PATH/TO/basis/dist/css/plugin/basis-ie9/basis-ie9.min.css" />
<![endif]-->
```

And support IE8 ( Not perfect )

```html
<!--[if lt IE 9]>
<script src="/PATH/TO/basis/vendor/html5.js"></script>
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

## Third party licenses

#### Stylus version of Normalize.css
* MIT License
* https://github.com/bymathias/normalize.styl

## License

MIT License

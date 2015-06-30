# gulp-bom [![Build Status](https://travis-ci.org/sindresorhus/gulp-bom.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-bom)

> Add a [UTF-8 BOM](http://en.wikipedia.org/wiki/Byte_order_mark#UTF-8) to files

From Wikipedia:

> The Unicode Standard permits the BOM in UTF-8, but does not require nor recommend its use. Byte order has no meaning in UTF-8.

Gulp strips the BOM as it's useless. This is for the few dumb tools that do require it. Don't use this unless you really need to.


## Install

```
$ npm install --save-dev gulp-bom
```


## Usage

```js
var gulp = require('gulp');
var bom = require('gulp-bom');

gulp.task('default', function () {
	return gulp.src('app.js')
		.pipe(bom())
		.pipe(gulp.dest('dist'));
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)

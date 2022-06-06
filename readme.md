# gulp-bom

> Add a [UTF-8 BOM](https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8) to files

From Wikipedia:

> The Unicode Standard permits the BOM in UTF-8, but does not require nor recommend its use. Byte order has no meaning in UTF-8.

Gulp strips the BOM as it's useless. This is for the few dumb tools that do require it. Don't use this unless you really need to.

## Install

```sh
npm install --save-dev gulp-bom
```

## Usage

```js
import gulp from 'gulp';
import bom from 'gulp-bom';

export default () => (
	gulp.src('app.js')
		.pipe(bom())
		.pipe(gulp.dest('dist'))
);
```

'use strict';
var test = require('ava');
var gutil = require('gulp-util');
var fn = require('./');

test(function (t) {
	t.plan(1);

	var stream = fn();

	stream.once('data', function (file) {
		t.assert(file.contents.toString() === '\uFEFFunicorn');
	});

	stream.write(new gutil.File({
		contents: new Buffer('unicorn')
	}));

	stream.end();
});

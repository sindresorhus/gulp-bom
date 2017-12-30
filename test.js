'use strict';
const test = require('ava');
const Vinyl = require('vinyl');
const m = require('.');

test.cb(t => {
	t.plan(1);

	const stream = m();

	stream.once('data', file => {
		t.is(file.contents.toString(), '\uFEFFunicorn');
		t.end();
	});

	stream.end(new Vinyl({
		contents: Buffer.from('unicorn')
	}));
});

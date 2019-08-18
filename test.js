'use strict';
const test = require('ava');
const Vinyl = require('vinyl');
const pEvent = require('p-event');
const gulpBom = require('.');

test('main', async t => {
	const stream = gulpBom();
	const dataPromise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		contents: Buffer.from('unicorn')
	}));

	const file = await dataPromise;
	t.is(file.contents.toString(), '\uFEFFunicorn');
});

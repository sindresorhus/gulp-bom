import {Buffer} from 'node:buffer';
import test from 'ava';
import Vinyl from 'vinyl';
import {pEvent} from 'p-event';
import gulpBom from './index.js';

test('main', async t => {
	const stream = gulpBom();
	const dataPromise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		contents: Buffer.from('unicorn'),
	}));

	const file = await dataPromise;
	t.is(file.contents.toString(), '\uFEFFunicorn');
});

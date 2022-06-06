import {Buffer} from 'node:buffer';
import transformStream from 'easy-transform-stream';
import PluginError from 'plugin-error';

const BOM = Buffer.from('\uFEFF');

export default function gulpBom() {
	return transformStream({objectMode: true}, async file => {
		if (file.isNull()) {
			return file;
		}

		if (file.isStream()) {
			throw new PluginError('gulp-bom', 'Streaming not supported');
		}

		file.contents = Buffer.concat([BOM, file.contents]);

		return file;
	});
}

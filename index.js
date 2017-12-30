'use strict';
const through = require('through2');
const PluginError = require('plugin-error');

const BOM = Buffer.from('\uFEFF');

module.exports = () => {
	return through.obj((file, enc, cb) => {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-bom', 'Streaming not supported'));
			return;
		}

		file.contents = Buffer.concat([BOM, file.contents]);
		cb(null, file);
	});
};

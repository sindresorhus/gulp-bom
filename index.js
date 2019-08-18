'use strict';
const through = require('through2');
const PluginError = require('plugin-error');

const BOM = Buffer.from('\uFEFF');

module.exports = () => {
	return through.obj((file, encoding, callback) => {
		if (file.isNull()) {
			callback(null, file);
			return;
		}

		if (file.isStream()) {
			callback(new PluginError('gulp-bom', 'Streaming not supported'));
			return;
		}

		file.contents = Buffer.concat([BOM, file.contents]);
		callback(null, file);
	});
};

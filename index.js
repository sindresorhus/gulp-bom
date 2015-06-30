'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var BOM = new Buffer('\uFEFF');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-bom', 'Streaming not supported'));
			return;
		}

		file.contents = Buffer.concat([BOM, file.contents]);
		cb(null, file);
	});
};

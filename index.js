import {Buffer} from 'node:buffer';
import {gulpPlugin} from 'gulp-plugin-extras';

const BOM = Buffer.from('\uFEFF');

export default function gulpBom() {
	return gulpPlugin('gulp-bom', file => {
		file.contents = Buffer.concat([BOM, file.contents]);
		return file;
	});
}

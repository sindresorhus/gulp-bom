import gulp from 'gulp';
import bom from './index.js';

export default function main() {
	return gulp.src('index.js')
		.pipe(bom())
		.pipe(gulp.dest('dest'));
}

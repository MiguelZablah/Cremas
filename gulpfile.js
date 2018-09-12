// Requiered
const gulp = require('gulp'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel'),
	minify = require('gulp-minify'),
	concat = require('gulp-concat'),
	cleanCSS = require('gulp-clean-css'),
	stripJsComments = require('gulp-strip-comments'),
	stripCssComments = require('gulp-strip-css-comments'),
	browserSync = require('browser-sync').create();

// Route Variables
const sassSrc = 'src/sass/**/*.scss';
const jsSrc = 'src/js/**/*.js';
const htmlDir = 'app/*.html';
const sassDir = 'app/css/';
const jsDir = 'app/js/';

// Task Sass compiler
gulp.task('sass', () => {
	return gulp
		.src(sassSrc)
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(stripCssComments())
		.pipe(cleanCSS({ compatibility: 'ie9' }))
		.pipe(gulp.dest(sassDir))
		.pipe(browserSync.stream());
});

// Task minify js
gulp.task('js', () => {
	return gulp
		.src(jsSrc)
		.pipe(concat('main.js'))
		.pipe(stripJsComments())
		// .pipe(babel({
		// 	presets: ['env']
		// }))
		.pipe(minify())
		.pipe(gulp.dest(jsDir))
		.pipe(browserSync.stream());
});

// Start server with sass wacher and html watcher
gulp.task('serve', () => {
	browserSync.init({
		server: './app'
	});

	gulp.watch(jsSrc, gulp.parallel('js'));
	gulp.watch(sassSrc, gulp.parallel('sass'));
	gulp.watch(htmlDir).on('change', browserSync.reload);
});

// Compile my sass files to css
gulp.task('default', gulp.series(['sass', 'js'], done => done()));

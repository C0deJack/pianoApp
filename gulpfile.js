var settings = {
	clean: true,
	scripts: true,
	polyfills: true,
	styles: true,
	copy: true,
	reload: true
};

var paths = {
	input: 'app/',
	output: 'dist/',
	scripts: {
		input: 'app/js/*',
		output: 'dist/js/'
	},
	styles: {
		input: 'app/scss/**/*.scss',
		output: 'dist/css/'
	},
	sounds: {
		input: 'app/sounds/*.wav',
		output: 'dist/sounds/'
	},
	index: {
		input: 'app/index.html',
		output: 'dist/'
	},
	reload: './dist/'
};


// General
var {gulp, src, dest, watch, series, parallel} = require('gulp');
var del = require('del');
var flatmap = require('gulp-flatmap');
var lazypipe = require('lazypipe');
var rename = require('gulp-rename');
var package = require('./package.json');

// Scripts
const eslint = require('gulp-eslint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-terser');
var optimizejs = require('gulp-optimize-js');

// Styles
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-cssnano');

// BrowserSync
var browserSync = require('browser-sync');


// Deletes any pre-existing content from output folder(s)
var cleanDist = function (done) {

	if (!settings.clean) return done();
	del.sync([
		paths.output
	]);
	return done();
};

// Repeated JavaScript tasks
var jsTasks = lazypipe()
	.pipe(optimizejs)
	.pipe(dest, paths.scripts.output)
	.pipe(rename, {suffix: '.min'})
	.pipe(uglify)
	.pipe(optimizejs)
	.pipe(dest, paths.scripts.output);

// Lint, minify, and concatenate scripts
var buildScripts = function (done) {

	if (!settings.scripts) return done();

	// Run tasks on script files
	src(paths.scripts.input)
		.pipe(flatmap(function(stream, file) {

			// If the file is a directory
			if (file.isDirectory()) {

				// Setup a suffix variable
				var suffix = '';

				// If separate polyfill files enabled
				if (settings.polyfills) {

					// Update the suffix
					suffix = '.polyfills';

					// Grab files that aren't polyfills, concatenate them, and process them
					src([file.path + '/*.js', '!' + file.path + '/*' + paths.scripts.polyfills])
						.pipe(concat(file.relative + '.js'))
						.pipe(jsTasks());

				}

				// Grab all files and concatenate them
				// If separate polyfills enabled, this will have .polyfills in the filename
				src(file.path + '/*.js')
					.pipe(concat(file.relative + suffix + '.js'))
					.pipe(jsTasks());

				return stream;

			}

			// Otherwise, process the file
			return stream.pipe(jsTasks());

		}));
	done();
};

var lintScripts = function (done) {

	if (!settings.scripts) return done();

	src([paths.scripts.input,'!node_modules/**'])
		.pipe(eslint({configFile: '.eslintrc.json'}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
	done();
};

// Process, lint, and minify Sass files
var buildStyles = function (done) {

	if (!settings.styles) return done();

	// Run tasks on all Sass files
	src(paths.styles.input)
		.pipe(sass({
			outputStyle: 'expanded',
			sourceComments: false
		}))
		// Changes the prefix on .css files where there are referenced in html
		.pipe(prefix({
			browsers: ['last 2 version', '> 0.25%'],
			cascade: true,
			remove: true
		}))
		.pipe(dest(paths.styles.output))
		.pipe(rename({suffix: '.min'}))
		.pipe(minify({
			discardComments: {
				removeAll: true
			}
		}))
		.pipe(dest(paths.styles.output));
	done();
};

var copyFiles = function (done) {
	if (!settings.copy) return done();

	src(paths.sounds.input)
		.pipe(dest(paths.sounds.output));

	src(paths.index.input)
		.pipe(dest(paths.index.output));
		
	done();
};


var startServer = function (done) {

	if (!settings.reload) return done();

	browserSync.init({
		server: {
			baseDir: paths.reload
		}
	});
	done();
};

var reloadBrowser = function (done) {
	if (!settings.reload) return done();
	browserSync.reload();
	done();
};

var watchSource = function (done) {
	watch(paths.input, series(exports.default, reloadBrowser));
	done();
};

exports.default = series(
	cleanDist,
	parallel(
		buildScripts,
		lintScripts,
		buildStyles,
		copyFiles
	)
);

exports.watch = series(
	exports.default,
	startServer,
	watchSource
);

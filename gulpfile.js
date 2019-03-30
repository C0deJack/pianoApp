var gulp = require('gulp');
var sass = require('gulp-sass');
var colors = require('colors');
const browser_sync = require("browser-sync").create();

var srcFile = 'scss/**/*.scss';
var destFile = 'dist/css';

// browserSync
function browserSync(done) {
	browser_sync.init({
	  server: {
		baseDir: "dist/"
	  },
	  port: 3000
	});
	done();
  }
  
  // browserSync Reload
  function browserSyncReload(done) {
	browser_sync.reload();
	done();
  }

gulp.task('sass', function(){
	try {
		console.log('SASS file successfully created and copied to: '.green + destFile);
		return gulp.src(srcFile)
			.pipe(sass())
			.pipe(gulp.dest(destFile))
	} catch(e) {
	console.log('The following error has occurred creating SCSS files: '.red + e);
	// TODO Check this error is even being triggered 
	};
});

function watchFiles() {
	gulp.watch(srcFile, sass);
	gulp.watch([
		'dist/index.html',
		'dist/css/main.css',
		'app/js/play.js'
	], browserSyncReload);
}

const watch = gulp.parallel(watchFiles, browserSync);
exports.watch = watch;

var gulp = require('gulp');
var sass = require('gulp-sass');

var srcFile = 'scss/**/*.scss';
var destFile = 'dist/css';

gulp.task('sass', function(){
	try {
		console.log('SASS file successfully created and copied to: ' + destFile);
		return gulp.src(srcFile)
			.pipe(sass())
			.pipe(gulp.dest(destFile))
	} catch(e) {
		console.log('The following error has occurred creating SCSS files: ' + e);
	};
});

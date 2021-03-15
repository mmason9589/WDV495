var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', gulp.series(function(){
	return gulp.src('./sass/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'));
}));

gulp.task('css', gulp.series(function (done) {
  gulp.src('./css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
	done();
}));

gulp.task('autoSass', gulp.series('sass', 'css'));

gulp.task('watch', function(){
	gulp.watch('./sass/*.sass', gulp.series('sass'));
	gulp.watch('./css/*.css', gulp.series('css'));
});

gulp.task('default', gulp.series('autoSass', 'watch'));

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

//http://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/

gulp.task('default',['minify-css','minify-js','minify-html'],function() {
	gulp.watch('./sass/**/*.scss',['minify-css']);
	gulp.watch('./scripts/**/*.js',['minify-js']);
	gulp.watch('./templates/**/*.html',['minify-html']);
});

gulp.task('minify-css', function() {
	 return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
    		browsers: ['last 2 versions']
    	}))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('minify-js', function() {
  gulp.src('./scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
});

gulp.task('minify-html', function() {
  return gulp.src('./templates/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build'))
});
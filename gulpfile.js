var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

gulp.task('default',['styles','minifyjs','minifyhtml'],function() {
	gulp.watch('./sass/**/*.scss',['styles']);
	gulp.watch('./scripts/**/*.js',['minifyjs']);
	gulp.watch('./templates/**/*.html',['minifyhtml']);
});

gulp.task('styles', function() {
	 return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
    		browsers: ['last 2 versions']
    	}))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('minifyjs', function() {
  gulp.src('./scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
});

gulp.task('minifyhtml', function() {
  return gulp.src('./templates/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build'))
});
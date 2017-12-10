'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./source/css'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('copy', function(){
    return gulp.src('./**/*', {base:"."})
      .pipe(gulp.dest('/Users/evle//github/min/'));
});


(function() {
  'use strict';

  var gulp = require('gulp'),
  path = require('path'),
  jade = require('gulp-jade'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();

  var sources = {
    sass: './app/styles/**/*.sass',
    jade: './app/**/*.jade'
  };

  var derived = {
    html: './public',
    css: './public/styles/'
  };


  gulp.task('jade', function () {
    var locals = {};
    gulp.src(sources.jade)
    .pipe(jade({locals: locals}))
    .pipe(gulp.dest(derived.html))
    .pipe(browserSync.stream());
  });


  gulp.task('sass', function () {
    return gulp.src(sources.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(derived.css))
    .pipe(browserSync.stream());
  });


  gulp.task('serve', ['sass', 'jade'], function() {

    browserSync.init({
      server: "./public"
    });

    gulp.watch(sources.jade, ['jade']);
    gulp.watch(sources.sass, ['sass']);
    gulp.watch('./public/**/*.html').on('change', browserSync.reload);
  });


  gulp.task('default', ['serve']);
})();

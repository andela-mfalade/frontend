(function() {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var jade = require('gulp-jade');
  var sass = require('gulp-sass');
  var concat = require('gulp-concat');
  var browserSync = require('browser-sync').create();

  var source = {
    sass: './app/styles/**/*.sass',
    jade: './app/**/**/*.jade',
    scripts: './app/**/**/*.js'
  };

  var derived = {
    html: './public',
    css: './public/css/',
    scripts: './public/js'
  };


  gulp.task('jade', function () {
    var locals = {};
    gulp.src(source.jade)
    .pipe(jade({locals: locals}))
    .pipe(gulp.dest(derived.html))
    .pipe(browserSync.stream());
  });


  gulp.task('sass', function () {
    return gulp.src(source.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(derived.css))
    .pipe(browserSync.stream());
  });


  gulp.task('scripts', function () {
    gulp.src(source.scripts)
      .pipe(concat('index.js'))
      .pipe(gulp.dest(derived.scripts));
  });


  gulp.task('serve', ['sass', 'jade', 'scripts'], function() {

    browserSync.init({
      server: "./public"
    });

    gulp.watch(source.jade, ['jade']);
    gulp.watch(source.sass, ['sass']);
    gulp.watch(source.scripts, ['scripts']);
    gulp.watch('./app/**/**/*.js').on('change', browserSync.reload);
    gulp.watch('./public/**/*.html').on('change', browserSync.reload);
  });


  gulp.task('default', ['serve']);
})();

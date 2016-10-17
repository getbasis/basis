'use strict';

/**
 * Import node modules
 */
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var stylus       = require('gulp-stylus');
var rename       = require('gulp-rename');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');

var path = {
  src: {
    stylus: 'src/stylus'
  },
  dist: {
    css: 'dist/css'
  }
};

/**
 * Stylus to CSS
 */
gulp.task('css', function() {
  return gulp.src(
      [
        path.src.stylus + '/basis.styl',
        path.src.stylus + '/plugin/basis-ie9/basis-ie9.styl'
      ],
      {base: path.src.stylus }
    )
    .pipe(stylus({
      'resolve url nocheck': true
    }))
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    ]))
    .pipe(gulp.dest(path.dist.css))
    .pipe(postcss([cssnano()]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(path.dist.css));
});

/**
 * Auto Compile Stylus.
 */
gulp.task('watch', function() {
  gulp.watch([path.src.stylus + '/**/*/styl'], ['css']);
});

/**
 * Build
 */
gulp.task('build', ['css']);

/**
 * Release
 */
gulp.task('release', ['build'], function() {
  return gulp.src(
      [
        './**',
        '!node_modules',
        '!node_modules/**'
      ])
      .pipe( gulp.dest('release'));
} );

gulp.task('default', ['build', 'watch']);

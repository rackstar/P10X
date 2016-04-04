'use strict';

var gulp = require('gulp');
var sync = require('browser-sync');
var nodemon = require('gulp-nodemon');

var paths = {
  scripts: ['public/app/**/*.js'],
  html: ['public/**/*.html'],
  styles: ['public/styles/styles.css']
};


gulp.task('start', ['serve'], function () {
  sync({
    notify: true,
    // address for server,
    injectChanges: true,
    files: paths.scripts.concat(paths.html, paths.styles),
    proxy: 'localhost:1337'
  });
});

gulp.task('serve', function () {
  nodemon({
    script: 'server.js',
    ignore: 'node_modules/**/*.js'
  });
});

gulp.task('default', ['start']);


'use strict';

var gulp = require('gulp');
var sync = require('browser-sync');
var nodemon = require('gulp-nodemon');

var paths = {
  // all our client app js files, not including 3rd party js files
  scripts: ['public/app/**/*.js'],
  html: ['public/index.html'],
  styles: ['public/styles/style.css']
};

// any changes made to your
// client side code will automagically refresh your page
// with the new changes
gulp.task('start', ['serve'], function () {
  sync({
    notify: true,
    // address for server,
    injectChanges: true,
    files: paths.scripts.concat(paths.html, paths.styles),
    proxy: 'localhost:1337'
  });
});

// start our node server using nodemon
gulp.task('serve', function () {
  nodemon({
    script: 'server.js',
    ignore: 'node_modules/**/*.js'
  });
});

gulp.task('default', ['start']);


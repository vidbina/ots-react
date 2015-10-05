var gulp = require('gulp');
var packager = require('electron-packager');

var packageOpts = {
  dir: './compile',
  out: './pkg',
  name: 'open-traffic-sim-studio',
  platform: 'all',
  arch: 'x64',
  version: '0.30.2',
};

gulp.task('package', ['compile', 'package-osx']);

gulp.task('package-osx', function() {
  console.log('package it');
  packageOpts.platform = 'darwin';
  packager(packageOpts, function(err, appPath) {
    if (err) console.log('failed because', err);
  });
});

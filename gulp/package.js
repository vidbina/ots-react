var gulp = require( 'gulp' );
var packager = require('electron-packager');

var package_opts = {
  dir: "./compile",
  out: "./pkg",
  name: "open-traffic-sim-studio",
  platform: "all",
  arch: "x64",
  version: "0.30.2",
};

gulp.task( 'package', ['compile', 'package-osx'] );

gulp.task( 'package-osx', function () {
  console.log("package it");
  package_opts.platform = "darwin";
  packager(package_opts, function(err, appPath) {
    if(err) console.log("failed because", err);
  } );
} );

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('deps', function() {

  gulp.src(['node_modules/three/build/three.min.js','node_modules/jquery/dist/jquery.min.js'])
  .pipe(concat('./dist'))
  .pipe(rename('dependencies.js'))
  .pipe(gulp.dest('dist'));


});

gulp.task('dev', function(){
    watch(['src/**/*.js','src/**/*.html'], function(){

      gulp.src([
           'src/**/*.js'
       ])
      .pipe(jshint())
      .pipe(concat('./dist'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('dist'));

      gulp.src([
        'src/**/*.html'])
      .pipe(gulp.dest('dist/views'))

  });
})

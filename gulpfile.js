var gulp       = require('gulp'),
    sass       = require('gulp-ruby-sass'),
    livereload = require('gulp-livereload');

// Default
gulp.task('default', function() {
  
  // Create a livereload server
  livereload.listen();

  // Watch for changes in the built site css
  gulp.watch('_site/css/*').on('change', livereload.changed);

});
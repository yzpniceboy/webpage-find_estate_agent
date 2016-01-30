/**
 * Created by Jeff on 2016/1/29.
 */
var gulp = require('gulp');
var sync = require('browser-sync');

var path = {
    style: 'css/**/*.css',
    script: 'js/**/*.css'
};

gulp.task('watch', function() {
    gulp.watch(path.style, ['']);
    gulp.watch(path.script, ['']);
});
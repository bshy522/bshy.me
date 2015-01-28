var gulp = require('gulp');

gulp.task('build', ['less', 'fonts', 'muiFonts'], function() {

    global.webpackConfig = require('../webpack.config.js');
    gulp.start('webpack');
});

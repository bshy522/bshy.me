var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('webpack', function() {

    var webpackConfig = global.webpackConfig;

    return gulp.src(webpackConfig.entry)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('public/dist/'));
});

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require('../config');

gulp.task('serve', ['setWatch', 'build'], function(callback) {

    gulp.watch(config.less.watch, ['less']);
    gulp.watch(config.jsx.watch, ['webpack']);
    nodemon({
            script: 'keystone.js',
            ext: 'js',
            env: {
                'NODE_ENV': 'development'
            },
            ignore: ['node_modules', 'gulp', 'app/views', 'public', 'gulpfile']
        })
        //.on('change', ['lint'])
        .on('restart', function() {
            console.log('restarted!');
        });
    callback();
});

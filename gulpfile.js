var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var watch = require('gulp-watch');
var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var duo = require('gulp-duojs');

/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
    'js': ['./app/**/*.js', './lib/**/*.js', './routes/**/*.js', 'keystone.js', 'package.json', '!./app/assets/**'],
    'styles': ['./app/**/*.less'],
    'vendor': {
        'styles': ['./vendor/**/*.css'],
        'js': ['./vendor/**/*.js']
    }
};

// gulp hint
gulp.task('hint', function() {
    gulp.src(paths.js)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));

});

// // gulp watcher for hint
// gulp.task('watch:hint', function() {
//     gulp.src(paths.js)
//         .pipe(watch())
//         .pipe(jshint())
//         .pipe(jshint.reporter(jshintReporter));
// });

// less解析
gulp.task('build-less', function() {
    gulp.src(paths.styles)
        .pipe(less())
        .pipe(gulp.dest('./tmp/built/site.min.css'))
});

// 合并、压缩、重命名css
gulp.task('stylesheets', ['build-less'], function() {
    // 注意这里通过数组的方式写入两个地址,仔细看第一个地址是css目录下的全部css文件,第二个地址是css目录下的areaMap.css文件,但是它前面加了!,这个和.gitignore的写法类似,就是排除掉这个文件.
    gulp.src('./tmp/built/site.min.css')
        .pipe(gulp.src(paths.vendor.styles))
        .pipe(concat('all.css'))
        .pipe(minifycss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./public/'))
});

// 合并，压缩js文件
gulp.task('javascripts', function() {
    gulp.src(paths.vendor.js)
        .pipe(gulp.src(paths.js))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./public/'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./public/'));
});

// 清空图片、样式、js
gulp.task('clean', function() {
    return gulp.src(['./public/all.min.*', ], {
            read: false
        })
        .pipe(clean({
            force: true
        }));
});

// 将bower的库文件对应到指定位置
gulp.task('buildlib', function() {

    gulp.src('./bower_components/angular/angular.min.js')
        .pipe(gulp.dest('./javis/static/build/js/'))
});

gulp.task('bundle', ['clean'], function() {

    gulp.src(['./app/assets/index.js'])
        .pipe(duo({
            // standalone: 'foobar'
        }))
        .pipe(gulp.dest('./public/dist/'));
    // gulp.src(['./app/assets/site.less'])
    //     .pipe(duo({
    //         standalone: 'foobar'
    //     }))
    //     .pipe(gulp.dest('./public/dist/'));
});

gulp.task('serve', ['bundle'], function() {

    gulp.watch('./app/assets/**/*.less', ['build-less']);
    nodemon({
            script: 'keystone.js',
            ext: 'js',
            ignore: ['app/assets/**/*.js']
        })
        .on('change', ['hint'])
        .on('restart', function() {
            console.log('restarted!')
        });
});

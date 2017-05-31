var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    jasmine = require('gulp-jasmine'),
    watch = require('gulp-watch');

gulp.task('default', function () {
    var tsResult = gulp.src(['src/**/*.ts','test/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'build.js'
        }));        

        return tsResult.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./'))
            .pipe(jasmine());
});

gulp.task('watch', function() {
    gulp.watch(['src/**/*.ts','test/**/*.ts'], ['default']);
});
var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    jasmine = require('gulp-jasmine'),
    watch = require('gulp-watch'),
    istanbul = require('gulp-istanbul');

gulp.task('default', function () {
    var tsResult = gulp.src(['src/**/*.ts', 'test/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'build.js'
        }));

    return tsResult.js
        .pipe(istanbul())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./'))
        .pipe(jasmine())
        .pipe(istanbul.writeReports());
});

gulp.task('watch', function () {
    gulp.watch(['src/**/*.ts', 'test/**/*.ts'], ['build-test']);
});

gulp.task('build-test', function () {
    var tsResult = gulp.src(['src/**/*.ts', 'test/**/*.ts'])
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
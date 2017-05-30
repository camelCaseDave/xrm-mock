var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tsSrcProject = ts.createProject('tsconfig.json'),
    tsTestProject = ts.createProject('tsconfig.json'),
    jasmine = require('gulp-jasmine');

gulp.task('default', ['build-src', 'build-test']);

gulp.task('build-src', function () {
    var tsSrcResult = gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsSrcProject()).js
        .pipe(sourcemaps.write({ sourceRoot: "/js" }))
        .pipe(gulp.dest("src"));
});

gulp.task('build-test', function () {
    var tsSrcResult = gulp.src('test/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsTestProject()).js
        .pipe(sourcemaps.write({ sourceRoot: "/js" }))
        .pipe(gulp.dest("test"));
});
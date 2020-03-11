// ========================================================
// GULP VARIABLES
// ========================================================
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    terser = require('gulp-terser'),
    sass = require('gulp-sass');

// ========================================================
// SET PATHS
// ========================================================
var sass_path = 'library/scss/',
    js_path = 'library/js/',
    min_path = 'min/';

// ========================================================
// DEFAULT TASKS
// ========================================================
// SASS for development
var onError = function (err) {
    gutil.beep();
    console.log(err);
};

gulp.task('sass', function () {
    gulp.src(sass_path + '/**/*.scss')
    .pipe(plumber({
        errorHandler: onError,
    }))
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 15 versions', 'ie 9'],
        cascade: true,
    }))
    .pipe(csso())
    .pipe(gulp.dest(min_path));
});

// ========================================================
// OPTIMIZE RUN
// ========================================================
// Merge all JavaScript files into one
gulp.task('jsmin', function () {
    return gulp.src(js_path + '/**/*.js')
    .pipe(plumber({
        errorHandler: onError,
    }))
    .pipe(terser())
    .pipe(gulp.dest(min_path));
});

// ========================================================
// BUILD TASK
// ========================================================
// Builds the assets to minified files and exists
gulp.task('build', ['jsmin', 'sass']);

// Watch CSS & JS file during developemt
gulp.task('watch', ['sass', 'jsmin'], function () {
    gulp.watch([sass_path + '/**/*.scss', js_path + '/**/*.js'], ['sass', 'jsmin']);
});
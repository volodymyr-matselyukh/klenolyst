/// <binding BeforeBuild='move_styles, move_scripts' AfterBuild='move_scripts, move_styles' />
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
    nodeModulesPath: './node_modules/',
    scriptsPath: './scripts/',
    stylesPath: './css',
    fontsPath: './fonts'
};

gulp.task('sass', async function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', async function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('move_scripts', async function () {
    return gulp.src([paths.nodeModulesPath + 'jquery/dist/jquery.min.js',
        paths.nodeModulesPath + 'bootstrap/dist/js/bootstrap.min.js'])
        .pipe(gulp.dest(paths.scriptsPath));
});

gulp.task('move_styles', async function () {
    return gulp.src([paths.nodeModulesPath + 'bootstrap/dist/css/bootstrap.min.css',
            paths.nodeModulesPath + 'bootstrap/dist/css/bootstrap-grid.min.css',
            paths.nodeModulesPath + 'font-awesome/css/font-awesome.min.css'])
        .pipe(gulp.dest(paths.stylesPath));
});

gulp.task('move_fonts', async function () {
    return gulp.src([paths.nodeModulesPath + 'font-awesome/fonts/*'])
        .pipe(gulp.dest(paths.fontsPath));
});


'use strict';

const gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    dir = {
        src: 'src',
        dist: 'dist',
        nm: 'node_modules'
    },
    options = {
        pug: {
            pretty: true,
            locals: {
                title: 'Single pages'
            }
        },
        sass: {
            outputStyle: 'compressed'
        }
    };

gulp.task('pug', () => {
    gulp
        .src(`${dir.src}/pug/*.pug`)
        .pipe(pug(options.pug))
        .pipe(gulp.dest(`${dir.dist}/views`))
});

gulp.task('sass', () => {
    gulp
        .src(`${dir.src}/scss/*.scss`)
        .pipe(sass(options.sass).on('error', sass.logError))
        .pipe(gulp.dest(`${dir.dist}/css`))
});

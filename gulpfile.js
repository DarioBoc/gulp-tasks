'use strict';

const gulp = require('gulp'),
    pug = require('gulp-pug'),
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
        }
    };

gulp.task('pug', () => {
    gulp
        .src(`${dir.src}/pug/*.pug`)
        .pipe(pug(options.pug))
        .pipe(gulp.dest(`${dir.dist}/views`))
});
'use strict';

module.exports = require('bootstrap-gulp');
const gulp = require('gulp');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

const svgSprite = require('gulp-svg-sprite');

gulp.task('build:icons', function(done) {
    return gulp.src('source/img/icons/*.svg')
        .pipe(replace('&gt;', '>'))
        .pipe(rename({
            prefix: 'icon-'
        }))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    dest: '',
                    sprite: 'icons-all.svg'
                }
            },
            svg: {
                xmlDeclaration: false,
                doctypeDeclaration: false,
                namespaceIDs: false,
                dimensionAttributes: false
            }
        }))
        .pipe(gulp.dest('source/img/icons/'))

    done();
});
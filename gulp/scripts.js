/*
 * scripts.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import source from 'vinyl-source-stream';
import buffer from'vinyl-buffer';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import sourcemaps from 'gulp-sourcemaps';
import _ from 'underscore';

const browserifyConfig = {
    paths: global.paths.js
};

gulp.task('scripts', function() {
    let bro;

    if (global.isDevEnv) {
        // if watch mode make sure to use watchify for fast rebundling
        bro = watchify(browserify(global.paths.jsEntry,
                    _.extend(watchify.args, browserifyConfig, { debug: true})));

        // on any es6 file change, perform a rebundle
        bro.on('update', function() {
            rebundle(bro);
        });
    } else {
        bro = browserify(global.paths.jsEntry, browserifyConfig);
    }

    bro.transform(babelify.configure({ compact: true }));
    return rebundle(bro);
});

function rebundle(bundler) {
    return bundler.bundle()
       .on('error', (e) => {
            console.log('Browserify Error: ', e);
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(global.isDevEnv, sourcemaps.init({ loadMaps: true })))
        .pipe(gulpif(global.isDevEnv, sourcemaps.write()))
        .pipe(gulpif(!global.isDevEnv, uglify()))
        .pipe(gulp.dest(`${global.paths.dist}/js`))
        .pipe(gulpif(global.isDevEnv, livereload()));
}

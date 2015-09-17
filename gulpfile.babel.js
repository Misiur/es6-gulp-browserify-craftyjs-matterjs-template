/*
 * gulpfile.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import gulp from 'gulp';
import requireDir from 'require-dir';
import runSeq from 'run-sequence';

// specify some global paths for the gulp tasks
global.paths = {
    js: './src',
    res: './res',
    dist: './dist',

    get scripts() { return this.js + '/**/*.js'; },
    get jsEntry() { return this.js + '/index.js'; },
    get index() { return './index.html'; },
    get resources() { return this.res + '/**/*'; },
};

// cache node environment type
global.isDevEnv = (process.env.NODE_ENV === 'development');

// Require each of the gulp tasks from the 'gulp/' folder.
// Each task is split into it's own file to avoid having one large and difficult
// gulp script to maintain.
requireDir('./gulp', { recurse: true });

// define the build task
gulp.task('build', function(done) {
    runSeq('clean', 'copy', 'assets', ['jshint', 'scripts'], done);
});

// define the main tasks for each different build mode
gulp.task('start', function(done) {
    runSeq('build', 'serve', done);
});

// set 'start' as the default task
gulp.task('default', ['start']);

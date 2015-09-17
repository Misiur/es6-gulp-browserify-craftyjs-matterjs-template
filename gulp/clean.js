/*
 * clean.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import gulp from 'gulp';
import del from 'del';

gulp.task('clean', function(done) {
    del(global.paths.dist, done);
});

/*
 * start.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import gulp from 'gulp';
import livereload from 'gulp-livereload';
import connect from 'gulp-connect';

gulp.task('serve', function() {
    if (global.isDevEnv) {
        livereload.listen();

        // watch over all resources and the main index.html
        gulp.watch(global.paths.index, ['copy']);
        gulp.watch(global.paths.resources, ['assets']);
    }

    return connect.server({
        root: global.paths.dist,
        port: 8000
    });
});

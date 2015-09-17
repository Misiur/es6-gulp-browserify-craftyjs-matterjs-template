/*
 * copy.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';

gulp.task('copy', function() {
    gulp.src([global.paths.index, './favicon.ico'])
        .pipe(gulp.dest(global.paths.dist))
        .pipe(gulpif(global.isDevEnv, livereload()));
});


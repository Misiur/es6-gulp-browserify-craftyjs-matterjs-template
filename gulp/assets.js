/*
* assets.js
* Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
*
* Distributed under terms of the MIT license.
*/

import gulp from 'gulp';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import cached from 'gulp-cached';

/**
* Define a task to minimise all images used
* in the game.
*/
gulp.task('assets:imagemin', function() {
   return gulp.src('./res/img/*.png')
       .pipe(gulpif(!global.isDevEnv, cached('imagemin')))
       .pipe(gulp.dest(`${global.paths.dist}/res/img`));
});

/**
* Define a task to copy all the resources into the dist folder
* to be hosted by the server. ''res/img' is excluded because all the
* images in that folder were optimised and already moved to the dist folder.
*/
gulp.task('assets:copy', function() {
   return gulp.src([global.paths.resources, '!./res/img'])
       .pipe(gulp.dest('./dist/res'));
});

gulp.task('assets', ['assets:imagemin', 'assets:copy']);

'use strict';

import gulp from 'gulp';
import less from 'gulp-less';

const paths = {
  less: 'less/',
  dest: 'dist/'
};

gulp.task('less',()=>{
  gulp.src(`${paths.less}**/*.less`)
    .pipe(less())
    .pipe(gulp.dest(`${paths.dest}css/`))
});

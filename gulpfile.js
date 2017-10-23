/*
 * @Author: Joy
 * @Date:   2017-10-23 10:16:03
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-10-23 10:21:20
 */

'use strict';

/**
 * 1.less 的编译压缩合并
 * 2.js 混淆压缩合并
 * 3.html 压缩
 */

//载入依赖包 gulp
var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

//less编译,压缩
gulp.task('style', function () {
  gulp.src(['src/style/*.less', '!src/style/_*.less'])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


//2.js的混淆，压缩，合并
var uglify = require('gulp-uglify');
gulp.task('script',function(){
  gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream:true
    }));
});

//3.img的复制

gulp.task('image',function(){
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({
      stream:true
    }));
});


//4.html的压缩
var htmlmin = require('gulp-htmlmin');
gulp.task('html',function(){
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
      stream:true
    }));
});


//测试http服务器
var browserSync = require('browser-sync').create();
gulp.task('serve',function(){
  browserSync.init({
    notify: false,
    port: 2015,
    server: {
      baseDir: ['dist']
    }
  });
  gulp.watch('src/styles/*.less',['style']);
  gulp.watch('src/js/*.js',['script']);
  gulp.watch('src/images/*.*',['image']);
  gulp.watch('src/*.html',['html']);
});
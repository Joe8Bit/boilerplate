'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var proxyMiddleware = require('./proxy');
var gutil = require('gulp-util');
var modRewrite = require('connect-modrewrite');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license']
});

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      middleware: [
        proxyMiddleware,
        modRewrite([
          '!\\.\\w+$ /index.html [L]'
        ])
      ]
    },
    browser: browser
  });

}

gulp.task('mock', function () {
  $.nodemon({
    script: './mock/mock.js',
    ignore: ['node_modules/**', 'src/**', 'gulp/**', '.tmp/**', '.sass-cache/**', 'test/**']
  }).on('restart', function () {
    gutil.log(gutil.colors.cyan('The mock was restarted'));
  });
});

gulp.task('complexity', function(){
    return gulp.src('src/app/**/*.js')
        .pipe($.complexity());
});

gulp.task('serve', ['config', 'mock', 'watch'], function () {
  browserSyncInit([
    'src',
    '.tmp'
  ], [
    '.tmp/{app,components}/**/*.css',
    'src/assets/images/**/*',
    'src/*.html',
    'src/{app,components}/**/*.html',
    'src/{app,components}/**/*.js'
  ]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit('dist');
});

gulp.task('serve:e2e', function () {
  browserSyncInit(['src', '.tmp'], null, []);
});

gulp.task('serve:e2e-dist', ['watch'], function () {
  browserSyncInit('dist', null, []);
});

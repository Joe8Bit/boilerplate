var gulp     = require('gulp');
var sass     = require('gulp-sass');
var scsslint = require('gulp-scss-lint');

gulp.task('style-build', function () {
  gulp.src('src/app/styles/main.scss')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths,
      includePaths: require('node-neat').includePaths
    }))
    .pipe(gulp.dest('.tmp/app/styles/'));
});

gulp.task('scss-lint', function() {
  gulp.src('src/app/styles/**/*.scss')
    .pipe(scsslint())
    .pipe(scsslint.failReporter());
});

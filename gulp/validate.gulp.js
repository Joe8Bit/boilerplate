var gulp = require('gulp'),
    jsValidate = require('gulp-jsvalidate');

gulp.task('validate', function () {
    return gulp.src(['src/{app,components}/**/*.js', 'test/**/*.js'])
        .pipe(jsValidate());
});
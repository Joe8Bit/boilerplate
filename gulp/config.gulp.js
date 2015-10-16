'use strict';

var gulp 		 		= require('gulp'),
	gulpNgConfig 	= require('gulp-ng-config'),
	rename 		 		= require('gulp-rename'),
	insert 		 		= require('gulp-insert'),
	replace 	 		= require('gulp-replace-task');

gulp.task('config' ,function () {
	return gulp.src('./config/defaults.json')
		.pipe(gulpNgConfig('ConfigModule', require('../config/' + (process.env.NODE_ENV || 'development'))))
		.pipe(rename('config.constant.js'))
		.pipe(insert.prepend('/* jshint ignore:start */\n'))
		.pipe(insert.append('/* jshint ignore:end */'))
		.pipe(replace({
			patterns: [{
				match: 'angular.module(\'ConfigModule\', [])',
				replacement: 'angular.module(\'ConfigModule\')'
			}]
	   }))
		.pipe(gulp.dest('./src/app/core/constant/'));
});

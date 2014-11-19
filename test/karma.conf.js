'use strict';

module.exports = function(config) {

  config.set({
    basePath: '..', //!\\ Ignored through gulp-karma //!\\

    files: [ //!\\ Ignored through gulp-karma //!\\
        'src/bower_components/angular/angular.js',
        'src/bower_components/angular/angular-route.js',
        'src/bower_components/angular-mocks/angular-mocks.js',
        'src/app/**/*.js',
        'test/unit/**/*.js'
    ],

    autoWatch: false,

    frameworks: [ 'jasmine' ],

    reporters: [ 'progress', 'coverage' ],

    preprocessors: {
      'src/app/**/*.js': [ 'coverage' ]
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    browsers: [ 'PhantomJS' ],

    plugins: [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-coverage',
        'karma-sinon'
    ]
  });

};

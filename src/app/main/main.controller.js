'use strict';

angular.module('boilerplate')
  .controller('MainCtrl', [
    '$log',
    function($log) {
      $log.info('The app has loaded');
    } ]);

(function() {
  'use strict';

  angular
    .module('exponea.controllers')
    .controller('homeCtrl', homeCtrl);

  function homeCtrl($scope) {
    console.log("homeCtrl is all set");
  }

  homeCtrl.$inject = ['$scope'];

})();

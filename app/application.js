(function() {
  'use strict';

  angular.module('exponea.controllers', []);
  angular.module('exponea.directives', []);

  var appDependencies = [
    'ui.router',
    'exponea.controllers',
    'exponea.directives'
  ];

  angular
    .module('Exponea', appDependencies)
    .config(loadConfig);

  function loadConfig($stateProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);

    var templates = {
      home: 'views/home.html',
      footer: 'partials/footer.html',
      header: 'partials/header.html',
    }

    var homeConfig = {
      url: '/',
      views: {
        'header': {templateUrl: templates.header, controller: 'homeCtrl'},
        'footer': {templateUrl: templates.gooter},
      }
    };

    $stateProvider
      .state('home', homeConfig);

  }

  loadConfig.$inject = ['$stateProvider', '$locationProvider', '$httpProvider'];

})();

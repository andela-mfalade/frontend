(function() {
  'use strict';

  angular.module('exponea.controllers', []);

  var appDependencies = [
    'nvd3',
    'ui.router',
    'exponea.controllers'
  ];

  angular
    .module('Exponea', appDependencies)
    .config(loadConfig);

  function loadConfig($stateProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);

    var templates = {
      charts: 'partials/charts.html',
      cards: 'partials/cards.html',
      pie: 'partials/pie.html',
      table: 'partials/table.html',
    }

    var homeConfig = {
      url: '/',
      views: {
        'charts': {templateUrl: templates.charts, controller: 'chartsCtrl as vm'},
        'cards': {templateUrl: templates.cards, controller: 'cardsCtrl'},
        'pie': {templateUrl: templates.pie, controller: 'pieCtrl'},
        'table': {templateUrl: templates.table, controller: 'tableCtrl'},
      }
    };

    $stateProvider
      .state('home', homeConfig);

  }

  loadConfig.$inject = ['$stateProvider', '$locationProvider', '$httpProvider'];

})();

(function() {
  'use strict';

  angular
    .module('exponea.controllers')
    .controller('chartsCtrl', chartsCtrl)
    .controller('cardsCtrl', cardsCtrl)
    .controller('pieCtrl', pieCtrl)
    .controller('tableCtrl', tableCtrl);

  function chartsCtrl($scope) {
    $scope.options = {
      chart: {
        type: 'discreteBarChart',
        height: 400,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 50
        },
        color: ['#8E59FB'],
        x: function(d){return d.label;},
        y: function(d){return d.value + (1e-10);},
        showValues: false,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        transitionDuration: 500,
        xAxis: {
          axisLabel: ''
        },
        yAxis: {
          axisLabel: '',
          axisLabelDistance: 30,
          width: 300
        }
      }
    };

    $scope.data = [{
      key: "Cumulative Return",
      values: [
          { "label" : "registration" , "value" : 55 },
          { "label" : "create_project" , "value" : 35 },
          { "label" : "live_data_received" , "value" : 53 },
          { "label" : "action1" , "value" : 3 },
          { "label" : "action2" , "value" : 30 },
          { "label" : "action" , "value" :  9}
        ]
    }]
  }


  function cardsCtrl($scope) {
    console.log("cardsCtrl is all set");
  }


  function pieCtrl($scope) {
    $scope.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        color: [
          '#FCD53E', '#FAA03A',
          '#F6552E', '#E72660',
          '#C548AC', '#5638D7',
          '#1F95F7', '#20C4C2'
        ],
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: false,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          rightAlign: false,
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    $scope.data = [
      {key: "customers", y: 40},
      {key: "funnels", y: 59},
      {key: "reports", y: 57},
      {key: "retention", y: 59},
      {key: "scenarios", y: 111},
      {key: "segmentations", y: 86},
      {key: "suggestion", y: 20},
      {key: "trends", y: 108},
      {key: "trends", y: 0}
    ];

  }

  function tableCtrl($scope) {
    $scope.rows = [
      {type: "customers", firstCol: 40, secondCol: 10},
      {type: "funnels", firstCol: 59, secondCol: 20},
      {type: "report", firstCol: 107, secondCol: 30},
      {type: "retention", firstCol: 39, secondCol: 40},
      {type: "scenarios", firstCol: 52, secondCol: 50},
      {type: "segmentations", firstCol: 56, secondCol: 60},
      {type: "suggestion", firstCol: 50, secondCol: 70},
      {type: "trends", firstCol: 38, secondCol: 80},
      {type: "trends", firstCol: 0, secondCol: 90}
    ];
  }

  chartsCtrl.$inject = ['$scope'];
  cardsCtrl.$inject = ['$scope'];
  pieCtrl.$inject = ['$scope'];
  tableCtrl.$inject = ['$scope'];

})();

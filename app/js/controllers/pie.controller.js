(function() {
  angular
    .module('Exponea.controllers')
    .controller('pieCtrl', pieCtrl);

  function pieCtrl() {
    var pieChart = this;

    pieChart.options = {
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

    pieChart.data = [
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

})();

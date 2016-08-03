(function() {
  angular
    .module('Exponea.controllers')
    .controller('chartsCtrl', chartsCtrl);

  function chartsCtrl() {
    var chart = this;

    this.options = {
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

    this.data = [{
      key: "Data",
      values: [
          { "label" : "registration" , "value" : 55 },
          { "label" : "create_project" , "value" : 35 },
          { "label" : "live_data_received" , "value" : 53 },
          { "label" : "action1" , "value" : 3 },
          { "label" : "action2" , "value" : 39 },
          { "label" : "action" , "value" :  9}
        ]
    }]
  }

})();

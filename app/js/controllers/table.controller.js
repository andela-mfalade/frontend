(function() {
  angular
    .module('Exponea.controllers')
    .controller('tableCtrl', tableCtrl);

  function tableCtrl() {
    var table = this;

    table.rows = [
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

})();

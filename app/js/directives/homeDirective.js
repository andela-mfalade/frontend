angular
  .module('exponea.directives')
  .directive('temp', temp)

function temp() {
  var config = {
    restrict: 'E',
    template: '<P>Directive is up and running</p>'
  };
  return config;
}

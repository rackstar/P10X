angular.module('read', [])

.controller('readCtrl', function ($scope, readSrvc) {
  $scope.text = readSrvc.text;
  $scope.animate = false;
  // readSrvc.appendData($scope.text);
});
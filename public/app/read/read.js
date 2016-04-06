angular.module('read', [])

.controller('readCtrl', function ($scope, readSrvc) {
  $scope.text = readSrvc.text;

});
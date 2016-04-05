angular.module('reading', [])

.controller('readingCtrl', function($scope, readingSrvc) {
  $scope.contains = readingSrvc.contains;
});
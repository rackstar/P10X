var p10x = angular.module('p10x', ['ngRoute']);

p10x.controller('HeaderCtrl', function($scope) {
  $scope.appDetails = {};
  $scope.appDetails.title = "P10X";
  $scope.appDetails.tagline = "Be a 10x programmer";
});

p10x.controller('typingCtrl', function($scope) {
  $scope
});

p10x.controller('readingCtrl', function($scope) {
  $scope
});
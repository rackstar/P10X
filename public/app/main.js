
var p10x = angular.module('p10x', ['ngRoute', 'reading', 'services']);


p10x.config(function ($routeProvider) {
  $routeProvider
    .when('/reading', {
      templateUrl: 'app/reading/reading.html',
      controller: 'readingCtrl'
    })
    .when('/typing', {
      templateUrl: 'app/typing/typing.html',
    })
    .otherwise({
      redirectTo: '/typing'
    });
});

p10x.controller('HeaderCtrl', function($scope) {
  $scope.appDetails = {};
  $scope.appDetails.title = "P10X";
  $scope.appDetails.tagline = "Be a 10x programmer";
  $scope.typingActive = true;
  $scope.readingActive = false;
  $scope.toggleTyping = function () {
    if(!$scope.typingActive) {
      $scope.typingActive = !$scope.typingActive;
      $scope.readingActive = !$scope.readingActive;
    }
  }
  $scope.toggleReading = function () {
    if(!$scope.readingActive) {
      $scope.typingActive = !$scope.typingActive;
      $scope.readingActive = !$scope.readingActive;
    }
  }
});




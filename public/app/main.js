
var p10x = angular.module('p10x', ['ngRoute', 'table', 'read', 'services']);


p10x.config(function ($routeProvider) {
  $routeProvider
    .when('/reading', {
      templateUrl: 'app/read/read.html',
      // controller: 'realReadCtrl'
    })
    .when('/typing', {
      templateUrl: 'app/typing/typing.html',
    })
    .when('/table', {
      templateUrl: 'app/table/table.html',
      controller: 'tableCtrl'
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
  $scope.tableActive = false;

  $scope.toggleTyping = function () {
    $scope.readingActive = false;
    $scope.tableActive = false;
    $scope.typingActive = true;
  };

  $scope.toggleReading = function () {
    $scope.typingActive = false;
    $scope.tableActive = false;
    $scope.readingActive = true;
  };

  $scope.toggleTable = function () {
    $scope.typingActive = false;
    $scope.readingActive = false;
    $scope.tableActive = true;
  };

});




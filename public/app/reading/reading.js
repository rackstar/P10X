angular.module('reading', [])

.controller('readingCtrl', function($scope) {
  $scope.randomArr = [];
  $scope.level = 0;
  $scope.next = 1;
  $scope.current;
  $scope.data = {}

  $scope.random = function(n) {
    randomNumbers = []
    for (var i = 1; i <= n; i++) {
      randomNumbers.push(i);
    }

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    $scope.randomArr = shuffle(randomNumbers);
  };

  $scope.contains = function(curr, n) {
    if(curr === $scope.next) {
      $scope.data[n] = true;
      $scope.next++;
    }
  };

  $scope.levelUp = function() {
    $scope.level += 2;
    $scope.random($scope.level);
  };

  $scope.levelDown =  function() {
    $scope.level -= 2;
    $scope.random($scope.level);
  };

  $scope.compareVal = function(id) {
    if(id <= $scope.level) {
      return true;
    } else {
      return false;
    }
  };;
});
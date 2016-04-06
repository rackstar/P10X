angular.module('table', [])

.controller('tableCtrl', function($scope) {
  $scope.randomArr = [];
  $scope.level = 0;
  $scope.next = 1;
  $scope.current;
  $scope.data = {}
  $scope.difficulty = 'noob';

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
    if($scope.level === 2) {
      $scope.difficulty = 'not so noob'
    }
    if($scope.level === 4) {
      $scope.difficulty = 'getting better'
    }
    if($scope.level === 6) {
      $scope.difficulty = 'difficult'
    }
    if($scope.level === 8) {
      $scope.difficulty = 'impresive'
    }
    if($scope.level === 10) {
      $scope.difficulty = 'expert'
    }
    if($scope.level === 12) {
      $scope.difficulty = 'Master Ninja Level'
    }
    if($scope.level === 14) {
      $scope.difficulty = 'you must be cheating if you can do this'
    }
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
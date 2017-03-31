(function (){
  'use strict';


angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    var totalNameValue = calculateNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };


  function calculateNumericForString(food) {

    var expresionRegular = /\s*,\s*/;
    var count = food.split(expresionRegular);

    // var count = string.split(",", count);
    var num = 0;
    console.log(count.length);

    if (count != 0){
      for (var i = 0; i < count.length; i++) {
        if(count[i].trim()!=""){
          num++;
        }
      }
    }

    if (num <= 3 && num != 0){
      return ("Enjoy");
    }
    else if (num>3){
      return ("Too much!");
    }
    else{
    return ("Please enter data first");
    }
  }

};

})();

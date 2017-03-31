(function (){
  'use strict';


angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.style= {}
  $scope.textBox= {}


  $scope.displayNumeric = function () {
    var totalNameValue = calculateNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };


  function calculateNumericForString(food) {

    var expresionRegular = /\s*,\s*/;
    var count = food.split(expresionRegular);
    var a = "Enjoy" ;
    var b = "Too much!";
    var c = "Please enter data first";

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
      $scope.style= {
        color: "green"
        }
      $scope.textBox= {
        border: "solid 3px green"
      }


      return (a);

    }
    else if (num>3){
      $scope.style= {
        color: "green"
      }
      $scope.textBox= {
        border: "solid 3px green"
      }
      return (b);
    }
    else{
      $scope.style= {
        color: "red"
      }
      $scope.textBox= {
        border: "solid 3px red"
      }
    return (c);
    }
  }

};

})();

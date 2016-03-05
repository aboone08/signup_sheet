var app = angular.module('ng_signUp', []);

app.controller('EntryController', function($scope){
  $scope.itemInfo = [{name: 'Sister Ivy', item: 'item to bring, arrival time, voluntered position'}]

  $scope.saveEntry = function(){
    $scope.itemInfo.push($scope.entry);
    $scope.entry = {};
  }
    console.log($scope.itemInfo);

  $scope.removeItem = function(itemInfo){
    var position = $scope.itemInfo.indexOf($scope.entry);
    $scope.itemInfo.splice(position, 1);
  }

  $scope.editItem = function(itemInfo){
    var index = $scope.itemInfo.indexOf($scope.entry);
    $scope.itemInfo.splice(index,1,$scope.entry);
    $scope.itemInfo = '';
  }

  // $scope.moveUp = function(singleItem){
  //   var index = $scope.itemInfo.indexOf(singleItem);
  //   $scope.itemInfo.splice(index, 1);
  //   $scope.itemInfo.splice(index-1, 0, singleItem);
  // }



 });

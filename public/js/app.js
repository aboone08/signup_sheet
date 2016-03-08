var app = angular.module('ng_signUp', []);

app.controller('EntryController', function($scope){
  // var data = memberName + itemEntered + checkbox

  $scope.entry = [''];
  $scope.entryList = [''];
  $scope.entryData = [''];
  // $scope.entryCopy = null;
  $scope.checkbox = false;


  $scope.saveEntry = function(){
    var entryInfo = $scope.entryData;
    $scope.entryList.push(entryInfo);
    $scope.entryData = "";
  }

  $scope.removeEntry = function(singleEntry){
    var position = $scope.entryList.indexOf(singleEntry);
    $scope.entryList.splice(position, 1);
  }

  $scope.entryEdit = function(entry){
    var index = $scope.entryList.indexOf(singleEntry);
    $scope.entryList.splice(index,1,$scope.entry);
    $scope.entryData = '';
  }

});

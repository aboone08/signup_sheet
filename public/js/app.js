var app = angular.module('ng_signUp', []);

app.controller('EntryController', function($scope){
  // var data = memberName + itemEntered + checkbox
  return[
    {'memberName': 'Sister Ivy', 'item': "food", "checkbox": "day"},
  ];


  $scope.entry = 'entry';
  $scope.entryData = null;
  $scope.entryCopy = null;
  $scope.checkbox = false;


  $scope.saveEntry = function(entry){
    var entryInfo = $scope.entryData;
    $scope.entry.push(entry);
    $scope.entryData = "";
  }

  $scope.removeEntry = function(entry){
    var position = $scope.entry.indexOf(entry);
    $scope.entry.splice(position, 1);
  }

  $scope.entryEdit = function(entry){
    var index = $scope.entry.indexOf(entry);
    $scope.entry.splice(index,1,$scope.entry);
    $scope.entry = '';
  }

});

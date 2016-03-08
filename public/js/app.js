var app = angular.module('ng_signUp', []);

app.controller('EntryController', function($scope){
  // var data = memberName + itemEntered + checkbox
  return[
    {'memberName': 'Sister Ivy', 'item': "food", "checkbox": "day"},
  ];


  $scope.entry = 'entry';
  $scope.selectedEntry = null;
  $scope.entryCopy = null;
  $scope.checkbox = false;

  // $scope.selectedEntry = function(entry){
  //   $scope.selectedEntry = entry;
  //   $scope.entryCopy = angular.copy(entry);
  // }

  $scope.saveEntry = function(entry){
    $scope.selectedEntry.data = $scope.entryCopy.data;
  }

  // $scope.submitForm = function(entry){
  //   $scope.data.push(entry);
  //   $scope.entry = {};
  // }

  $scope.removeEntry = function(entry){
    var position = $scope.selectedEntry.indexOf(entry);
    $scope.selectedEntry.splice(position, 1);
  }

  $scope.entryEdit = function(entry){
    $scope.entry = entry;
    $scope.removeEntry(entry);
  }

});

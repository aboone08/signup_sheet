var app = angular.module('ng_signUp', []);

app.factory('entry', function(){
  return[
    {'memberName': 'Sister Ivy', 'item': "food", "checkbox": "day"},
  ];
});

app.controller('EntryController', function($scope){
  var entry = memberName + itemEntered + checkbox
  $scope.entry = entry;
  $scope.selectedEntry = null;
  $scope.entryCopy = null;

  $scope.selectedEntry = function(entry){
    $scope.selectedEntry = entry;
    $scope.entryCopy = angular.copy(entry);
  }


  $scope.saveEntry = function(){
    $scope.selectedEntry.entry = $scope.entryCopy.entry;
  }

  // $scope.checkbox = {
  //   Su : '',
  //   M  : '',
  //   Tu : '',
  //   W  : '',
  //   Th : '',
  //   F  : '',
  //   Sa : ''
  // }

  $scope.checkbox('click', [$scope, function(){
      var Su = element(by.binding('checkbox.Su'));
      var M = element(by.binding('checkbox.M'));
      var T = element(by.binding('checkbox.Tu'));
      var W = element(by.binding('checkbox.W'));
      var Th = element(by.binding('checkbox.Th'));
      var F = element(by.binding('checkbox.F'));
      var Sa = element(by.binding('checkbox.Sa'));

      expect(Su.getText()).toContain('true');
      expect(M.getText()).toContain('true');
      expect(Tu.getText()).toContain('true');
      expect(W.getText()).toContain('true');
      expect(Th.getText()).toContain('true');
      expect(F.getText()).toContain('true');
      expect(Sa.getText()).toContain('YES');

      element(by.model('checkbox.Su')).click();
      element(by.model('checkbox.M')).click();
      element(by.model('checkbox.Tu')).click();
      element(by.model('checkbox.W')).click();
      element(by.model('checkbox.Th')).click();
      element(by.model('checkbox.F')).click();
      element(by.model('checkbox.Sa')).click();

      expect(Su.getText()).toContain('false');
      expect(M.getText()).toContain('false');
      expect(Tu.getText()).toContain('false');
      expect(W.getText()).toContain('false');
      expect(Th.getText()).toContain('false');
      expect(F.getText()).toContain('false');
      expect(Sa.getText()).toContain('NO');
  }]
};

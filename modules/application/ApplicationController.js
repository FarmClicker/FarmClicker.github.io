FarmClickerApp.controller('ApplicationController', ['$scope', '$interval', 'harvest', function($scope, $interval, harvest){

  //Returns the class to display if the upgrade is not available
  $scope.unavailable = function(object){
    return harvest.unavailable(object);
  };

  // Run UI update code every 100ms
  $interval(function() {
      harvest.addToHarvest(harvest.getHarvestPerSec()/10);

  }, 100);
}]);

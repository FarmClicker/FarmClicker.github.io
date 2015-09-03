FarmClickerApp.controller('ApplicationController', ['$scope', '$interval', 'harvest', 'storage', function($scope, $interval, harvest, storage){

  //Returns the class to display if the upgrade is not available
  $scope.unavailable = function(object){
    return harvest.unavailable(object);
  };

  // Run UI update code every 100ms
  //TODO: fix this
  $interval(function() {
    if (harvest.getCropsHarvested() + harvest.getHarvestPerSec()/10 <= storage.getMaxStorage())
      harvest.addToHarvest(harvest.getHarvestPerSec()/10);
    else {
      harvest.addToHarvest(storage.getMaxStorage() - harvest.getCropsHarvested());
    }

  }, 100);
}]);

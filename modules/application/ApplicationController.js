FarmClickerApp.controller('ApplicationController', ['$scope', '$interval', 'harvest', 'storage', function($scope, $interval, harvest, storage){

  //Returns the class to display if the upgrade is not available
  $scope.unavailable = function(object){
    return harvest.unavailable(object);
  };

  // Run UI update code every second
  //TODO: fix this
  $interval(function() {
    var cropsHarvested = harvest.getCropsHarvested();
    var harvestPerSec = harvest.getHarvestPerSec();
    var maxStorage = storage.getMaxStorage();
    if (cropsHarvested + harvestPerSec/1 <= maxStorage){
      // var cropsHarvested = Math.floor(harvest.getCropsHarvested());
      harvest.addToHarvest(harvestPerSec/1);
    }
    else {
      harvest.addToHarvest(maxStorage - cropsHarvested);
    }

  }, 1000);
}]);

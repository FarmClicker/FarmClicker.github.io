FarmClickerApp.controller('HarvestController', ['$scope', '$http', 'harvest', 'storage', function($scope, $http, harvest, storage){

  // $scope.harvestData = {};
  //
  // $http.get('/modules/harvest/HarvestData.js').success(function(data) {
  //   $scope.harvestData = data;
  // });

  $scope.getHarvestCropButton = function(){
    return harvest.getHarvestCropButton();
  };

  $scope.getCropsHarvested = function(){
    return harvest.getCropsHarvested();
  };

  $scope.getHarvestPerSec = function(){
    return harvest.getHarvestPerSec();
  };

  $scope.harvestCrops = function(){
    // $scope.pulseToggle = !$scope.pulseToggle
    if (harvest.getCropsHarvested() + harvest.getHarvestPerClick() <= storage.getMaxStorage())
      harvest.harvestCrops();
    else {
      harvest.addToHarvest(storage.getMaxStorage() - harvest.getCropsHarvested());
    }
  };

}]);

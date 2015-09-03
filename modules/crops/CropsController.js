FarmClickerApp.controller('CropsController', ['$scope', '$http', 'productivity', 'harvest', function($scope, $http, productivity, harvest){

  $scope.cropsData = {};

  $http.get('/modules/crops/CropsData.js').success(function(data) {
    $scope.cropsData = data;
  });

  $scope.clickCrop = function(crop){
    if (harvest.getCropsHarvested() >= crop.price) {
            harvest.deductFromHarvest(crop.price);
            harvest.increaseHarvestPerClick(crop.perClick);

            crop.bought = true;
        }
  };


}]);

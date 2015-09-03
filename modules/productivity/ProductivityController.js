FarmClickerApp.controller('ProductivityController', ['$scope', '$http', 'productivity', 'harvest', function($scope, $http, productivity, harvest){

  $scope.productivityUpgrades = {};

  $http.get('/modules/productivity/ProductivityUpgrades.js').success(function(data) {
    $scope.productivityUpgrades = data;
  });

  $scope.clickUpgrade = function(upgrade){
    if (harvest.getCropsHarvested() >= upgrade.price) {
            harvest.deductFromHarvest(upgrade.price);
            harvest.increaseHarvestPerSec(upgrade.persecond);
            // incrementAutoclick(product.persecond);

            upgrade.bought += 1;
            upgrade.price += Math.floor(upgrade.price * upgrade.increase)
        }
  };

  //Returns the class to display if the upgrade is not available
  $scope.unavailable = function(upgrade){
    return harvest.unavailable(upgrade);
  };


  // $scope.getHireWorkerButton = function(){
  //   return productivity.getHireWorkerButton();
  // };
  //
  // $scope.getNumberOfWorkers = function(){
  //   return productivity.getUpgrade("worker");
  // };
  //
  // $scope.hireWorker = function(){
  //   $scope.pulseToggle = !$scope.pulseToggle
  //   productivity.addToUpgrades("worker", 1);
  // };

}]);

FarmClickerApp.controller('ApplicationController', ['$scope', '$interval', 'harvest', function($scope, $interval, harvest){

  // Run UI update code every 100ms
  $interval(function() {
      harvest.addToHarvest(harvest.getHarvestPerSec()/10);

  }, 100);
}]);

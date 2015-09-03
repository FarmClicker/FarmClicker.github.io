FarmClickerApp.controller('StorageController', ['$scope', 'storage', function($scope, storage){

  $scope.getMaxStorage = function(){
    return storage.getMaxStorage();
  };

  $scope.increaseMaxStorage = function(amount){
    storage.increaseMaxStorage(amount);
  };

}]);

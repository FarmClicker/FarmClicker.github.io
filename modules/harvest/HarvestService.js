FarmClickerApp.service('harvest', function(){
  var harvestCropButton = "../../assets/img/oat.png";
  var cropsHarvested = 0;
  var harvestPerSec = 0;
  var harvestPerClick = 1;

  this.getHarvestCropButton = function(){
    return harvestCropButton;
  };

  this.getCropsHarvested = function(){
    return cropsHarvested;
  };

  this.deductFromHarvest = function(amount){
    cropsHarvested -= amount;
  };

  this.harvestCrops = function(){
    cropsHarvested += harvestPerClick;
  };

  this.addToHarvest = function(amount){
    cropsHarvested += amount;
  };

  this.getHarvestPerSec = function(){
    return harvestPerSec;
  };

  this.getHarvestPerClick = function(){
    return harvestPerClick;
  };

  this.increaseHarvestPerSec = function(amount){
    harvestPerSec += amount;
  };

  this.increaseHarvestPerClick = function(amount){
    harvestPerClick += amount;
  };

  this.unavailable = function(object){
    if (cropsHarvested < object.price)
      return "unavailable";
  };



});

FarmClickerApp.service('storage', function(){
  var maxStorage = 200;

  this.getMaxStorage = function(){
    return maxStorage;
  };

  this.increaseMaxStorage = function(amount){
    maxStorage += amount;
  };

});

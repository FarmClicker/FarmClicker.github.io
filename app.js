var FarmClickerApp = angular.module('FarmClickerApp', ['ngRoute']);
//TODO: routing
FarmClickerApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'ApplicationController',
    templateUrl: 'modules/application/app.html'
  })
  .when('/about', {
    templateUrl: 'modules/about/about.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

'use strict';

// Declare app level module which depends on views, and components
angular.module('templatestore', [
  'ngRoute',
  'templatestore.view1',
  'templatestore.view2',
  'templatestore.templates'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/templates'});
}]);

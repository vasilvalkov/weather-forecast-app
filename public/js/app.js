'use strict';

// Declare app level module which depends on views, and components
var weatherApp = angular.module('weatherApp', [
  // 'ngRoute',
  // 'weatherApp.view1',
  // 'weatherApp.view2',
  // 'weatherApp.version'
])
.filter('parseDate', [
    '$filter', function($filter) {
        return function(input, format) {
            return $filter('date')(new Date(input), format);
        };
    }
]);
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

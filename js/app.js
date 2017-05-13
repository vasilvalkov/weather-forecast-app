'use strict';

var weatherApp = angular.module('weatherApp', [
        'ngRoute'
    ])
    .filter('parseDate', [
        '$filter',
        function ($filter) {
            return function (input, format) {
                return $filter('date')(new Date(input), format);
            };
        }
    ])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        // $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html'
            })
            .when('/forecast', {
                templateUrl: 'templates/forecast.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);
'use strict';

weatherApp.controller('WeatherInfoController',
    function ($scope, forecastData) {
        forecastData.getForecast('Sofia', 2, function (result) {
            $scope.location = result.data.location;
            $scope.current = result.data.current;
            $scope.forecast = result.data.forecast;
        });

    });
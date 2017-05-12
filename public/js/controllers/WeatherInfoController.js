'use strict';

weatherApp.controller('WeatherInfoController',
    function ($scope, forecastData) {
        forecastData.getForecast('Sofia', 2)
            .then(function (result) {
                $scope.location = result.data.location;
                $scope.current = result.data.current;
                $scope.forecast = result.data.forecast;
            },
            function (error) {
                // TODO: notify user no data for the entered city, town or village
            });

            $scope.content = 'today';

    });
'use strict';

weatherApp.controller('WeatherInfoController',
    function ($scope, $location, forecastData) {
        $scope.formData = {
            cityName: ''
        };

        $scope.infoText = {
            className: 'text-default',
            message: 'Enter name of a city and press search:'
        };

        $scope.getData = function () {
            forecastData.getForecast($scope.formData.cityName, 2)
                .then(function (result) {
                        $scope.location = result.data.location;
                        $scope.current = result.data.current;
                        $scope.forecast = result.data.forecast;
                        $location.url('/forecast');
                    },
                    function (error) {
                        $scope.infoText.className = 'text-warning';
                        $scope.infoText.message = error.data.error.message;
                    })
                .catch(function (ex) {
                    console.log(ex.message);
                });
        }

        $scope.content = 'today';
    });
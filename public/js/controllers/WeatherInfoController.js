'use strict';

weatherApp.controller('WeatherInfoController',
    function ($scope, $http) {
        $http({
                method: 'GET',
                url: 'http://api.apixu.com/v1/forecast.json?key=29d83fa2298a47d29bb121845161212&q=Sofia&days=2'
            })
            .then(function (result) {
                $scope.location = result.data.location;
                $scope.current = result.data.current;
                // $scope.city = result.data.location.name;
                // $scope.localDateAndTime = result.data.location.localtime;
                // $scope.currentTemp = result.data.current.temp_c;
                // $scope.condition = result.data.current.condition;
                $scope.forecast = result.data.forecast;
                console.log(result.data)
            });
            // .error(function (data, status, headers, config) {
            //     $scope.items = data || 'Request failed';
            //     $scope.status = status;
            // });

        // $scope.hide48HourForecast = true;

        // function hide48HourForecast() {

        // }

    });
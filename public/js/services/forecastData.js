weatherApp.factory('forecastData', function ($http) {
    return {
        getForecast: function (cityName, daysCount, successcb) {
            $http({
                    method: 'GET',
                    url: 'http://api.apixu.com/v1/forecast.json?key=29d83fa2298a47d29bb121845161212&q=' +
                    cityName +'&days=' + daysCount
                })
                .then(function (data, status, headers, config) {
                    successcb(data);
                });
                // .error(function (data, status, headers, config) {

                // });
        }
    }
})
weatherApp.factory('forecastData', function ($http) {
    return {
        getForecast: function (cityName, daysCount) {
            const url = 'http://api.apixu.com/v1/forecast.json?key=29d83fa2298a47d29bb121845161212&q=' +
                cityName + '&days=' + daysCount;

           return $http.get(url);
        }
    }
})
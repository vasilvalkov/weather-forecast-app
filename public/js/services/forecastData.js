weatherApp.factory('forecastData', function ($http) {
    return {
        getForecast: function (cityName, daysCount) {
            
            return $http.get('http://api.apixu.com/v1/forecast.json', {
                params: {
                    key: '29d83fa2298a47d29bb121845161212',
                    q: cityName,
                    days: daysCount
                }
            });
        }
    }
})
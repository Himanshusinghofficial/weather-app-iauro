const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // weather
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=cbd08c3c9e3b8280fff988c087f0b43e&units=metric'

    request({ url: url, json: true }, (error, response) => {
        // console.log(response.body)
        if (error) {
            callback('unable to connect to weather service!', undefined)
        } else if (response.body.cod === 400) {
            callback('unable to find the location', undefined)
        }
        else {
            var sunrise = new Date((response.body.city.sunrise * 1000) + 19800)
            sunriseval = sunrise.toLocaleTimeString();
            var sunset = new Date((response.body.city.sunset * 1000) + 19800)
            sunsetval = sunset.toLocaleTimeString();

            callback(undefined, {
                list: response.body.list,
                sunrise: sunriseval,
                sunset: sunsetval
            })
        }
    })
}

module.exports = forecast
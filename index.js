// const path = require('path')
const geocode = require('./geocode')
const forecast = require('./forecast')
const express = require('express')

const app = express();
const port = process.env.PORT || 5000;

app.get('/weather', (req, res) => {
    console.log(req.query.address)
    if (!req.query.address) {
        return res.send({
            error: 'you must provide an address'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(latitude, longitude, (error, forecastedata) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                location,
                list: forecastedata.list,
                sunrise_time: forecastedata.sunrise,
                sunset_time: forecastedata.sunset
            })
        })

    })
})

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
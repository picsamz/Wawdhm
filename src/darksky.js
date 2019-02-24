const http = require('https');

const apikey = process.env.DARKSKY_APIKEY;
const latitude = 46.8139;
const longitude = -71.2080;
const url = `https://api.darksky.net/forecast/${apikey}/${latitude},${longitude}?units=si`;

var weatherForecast = {};

http.get(url, (response)=>{
    response.setEncoding('utf8');
    var rawdata = '';
    response.on('data', (chunk) => {rawdata += chunk;});
    response.on('end', () => {
        weatherForecast = JSON.parse(rawdata);
    });
});

var getWeatherForeCast = () => {
    return weatherForecast;
};

module.exports = {
    getWeatherForeCast: getWeatherForeCast
};

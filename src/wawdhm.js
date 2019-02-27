
var includesBadStuff = (s) => {
    if (s.includes('snow')){
        return true;
    }
    return false;
};

var calculateWawdhIndex = (weatherForecast) => {
    var wawdhIndex = 0;

    if (weatherForecast['currently']['temperature'] < 10){
        wawdhIndex += (10 - weatherForecast['currently']['temperature'])*1.5;
    }

    if (includesBadStuff(weatherForecast['currently']['icon'])){
        wawdhIndex+= 20;
    }

    if (weatherForecast['alerts'] && weatherForecast['alerts'].length > 0){
        wawdhIndex+= 20;
    }

    if (includesBadStuff(weatherForecast['daily']['icon'])){
        wawdhIndex+= 20;
    }

    wawdhIndex = Math.min(wawdhIndex, 100);

    return wawdhIndex;
};

module.exports = {
    calculateWawdhIndex: calculateWawdhIndex
};


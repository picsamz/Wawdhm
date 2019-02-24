var opts = {
    angle: 0.15,
    lineWidth: 0.44,
    radiusScale: 1,
    pointer: {
        length: 0.6,
        strokeWidth: 0.035,
        color: '#000000'
    },
    limitMax: false,
    limitMin: false,
    colorStart: '#6FADCF',
    colorStop: '#8FC0DA',
    strokeColor: '#E0E0E0',
    generateGradient: true,
    highDpiSupport: true,
    staticLabels: {
        font: "10px sans-serif",
        labels: [20,40,60,80],
        color: "#000000",
        fractionDigits: 0
    },

};
var target = document.getElementById('gauge');
var gauge = new Gauge(target).setOptions(opts);
gauge.maxValue = 100;
gauge.setMinValue(0);
gauge.animationSpeed = 128;
var value = parseFloat(document.getElementById('wawdhindex').getAttribute('value'));
gauge.set(value);

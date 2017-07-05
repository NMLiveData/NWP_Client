var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "none",
    "marginLeft": 20,
    "pathToImages": "https://www.amcharts.com/lib/3/images/",
    "dataProvider": [{
        "day": "1",
        "value": 0.307
    }, {
        "day": "2",
        "value": -0.168
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "inside": true,
        "position": "left",
        "ignoreAxisWidth": true
    }],
    "graphs": [{
        "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",
        "bulletSize": 6,
        "lineColor": "#d1655d",
        "lineThickness": 2,
        "negativeLineColor": "#637bb6",
        "type": "smoothedLine",
        "valueField": "value"
    }],
    "chartScrollbar": {},
    "chartCursor": {
        "categoryBalloonDateFormat": "YYYY",
        "cursorAlpha": 0,
        "cursorPosition": "mouse"
    },
    "dataDateFormat": "YYYY",
    "categoryField": "year",
    "categoryAxis": {
        "minPeriod": "YYYY",
        "parseDates": true,
        "minorGridAlpha": 0.1,
        "minorGridEnabled": true
    }
});
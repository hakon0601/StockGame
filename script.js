/**
 * Created by sondredyvik on 09.03.15.
 */
var chart1;
var allText;

var urls = ["http://hoffson.me/capitalist/stocks/aapl_out.txt", "http://hoffson.me/capitalist/stocks/bud_out.txt", "http://hoffson.me/capitalist/stocks/goog_out.txt", "http://hoffson.me/capitalist/stocks/gs_out.txt", "http://hoffson.me/capitalist/stocks/mcd_out.txt", "http://hoffson.me/capitalist/stocks/tsla_out.txt"];

var all_stocks = [{}, {}, {}, {}, {}, {}];
var days = [];

x_ticks = [[], [], [], [], [], []];
var tickCounter = 0;
var running= false;

function intervalTrigger(){
    return window.setInterval(updateGraph,500);
}

var interval;
function updateGraph() {
    console.log("Tickcount: " + tickCounter);
    if (tickCounter==0){
        days = [];

        for (var j = 0 ; j < all_stocks.length ; j++) {
            days[j] = selectDay(all_stocks[j])
            x_ticks[j] = [];
            chart1.series[j].setData([]);
        }

    }
    if (tickCounter > 30) {
        window.clearInterval(interval);
        running = false;
        tickCounter = 0;
    } else {
        for (var k = 0; k < all_stocks.length; k++) {
            console.log()
            x_ticks[k][x_ticks[k].length] = days[k][tickCounter][1];
            chart1.series[k].addPoint(parseInt(x_ticks[k][tickCounter]));
        }

        chart1.redraw();
        tickCounter += 1;
    }

}
function startSimulation(){
    if (running == false){
        interval = intervalTrigger();
        running = true;
    }
}


$(document).ready(function() {
    chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'line'
        },
        title: {
            text: 'Kapitalistisk Aften'
        },
        xAxis: {
            categories: ['0'],
            ordinal: false,
            max:30
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            ordinal: false,
            min:0,
            max:100

        },
        series: [{
            name: 'Apple',
            data: [null]
        }, {
            name: 'Budweiser',
            data: [null]
        }, {
            name: 'Google',
            data: [null]
        }, {
            name: 'Goldman Sachs',
            data: [null]
        }, {
            name: 'McDonalds',
            data: [null]
        }, {
            name: 'Tesla',
            data: [null]
        }]
    });

    for (var i = 0 ; i < all_stocks.length ; i++) {
        readTextFile(urls[i], i);
    }
});

function readTextFile(file, index)
{
    var array = all_stocks[index];
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText.split('\n');
                for (var i = 0 ; i < allText.length ; i++) {
                    var a = allText[i].split(', ');
                    var values = [a[1], a[2]];
                    var date = String(a[0]);

                    if (date in array == false) {
                        array[date] = [];
                    }
                    console.log(date);
                    array[date][array[date].length] = values;
                }
                all_stocks[index] = array;
            }
        }
    }
    rawFile.send(null);
    rawFile.onreadystatech
}

function selectDay(array){
    var randKey;
    while (randKey == null || randKey.length != 10) {
        var keys = Object.keys(array);
        var randKey = keys[Math.floor(keys.length * Math.random())]
        console.log(randKey);
        console.log(randKey.length);
    }
    return array[randKey];
}


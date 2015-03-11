/**
 * Created by sondredyvik on 09.03.15.
 */
var chart1;
var tickCounter= 0;
var running= false;
function intervalTrigger(){
    return window.setInterval(updateGraph,500);
}


var interval;
function updateGraph() {
    if (tickCounter==0){


        chart1.series[0].setData([]);
        chart1.series[1].setData([]);
        chart1.series[2].setData([]);

    }
    if(tickCounter <= 5){

        chart1.series[0].addPoint(tickCounter*5);
        chart1.series[1].addPoint(tickCounter*11);
        chart1.series[2].addPoint(tickCounter*12);

        chart1.redraw();
        console.log('fucker');
        tickCounter +=1;
        }
    else{
        window.clearInterval(interval);
        running = false;
        tickCounter = 0;
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
            max:100

        },
        series: [{
            name: 'Apple',
            data: [null]
        }, {
            name: 'Tesla',
            data: [null]
        }, {
            name: 'Google',
            data: [null]
        }]
    });









});


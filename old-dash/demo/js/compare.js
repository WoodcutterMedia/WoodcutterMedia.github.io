
Highcharts.chart('compare', {
    chart: {
        type: 'line',
        backgroundColor:'rgba(255, 255, 255, 0)'
    },
    title: {
        text: 'Historical Woodcutter Index'
    },

    exporting: {
    enabled: false 
    },

    xAxis: {
        categories: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28'],
        tickmarkPlacement: 'on',
        title: {
            text: 'May, 2018'
        }
    },
    yAxis: {
        title: {
            text: 'Woodcutter Index'
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' WI'
    },
    plotOptions: {
        area: {
            // stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Raazi',
        color: 'red',
        data: [4.5, 6.5, 7.2, 6.5, 4.9, 6, 7.5, 7.1, 7.1, 6, 7.2, 7.8, 7.5, 8.112179487]
    }, {
        name: 'The Past',
        color: 'green',
        data: [0, 1.9, 2.5, 2.1, 2, 1.4, 5, 3, 2, 1.5, 1.5, 3.4, 3.3, 4.660980392]
    }, {
        name: 'Veerey Ki Wedding',
        color: 'black',
        data: [0, 0, 0, 0, 0, 6.4, 8.5, 6, 5.6, 6.7, 7.4, 8.9, 8.5, 9.243003401]
    }]
});

// Mentions

Highcharts.chart('webmentions', {
    chart: {
        type: 'line',
        backgroundColor:'rgba(255, 255, 255, 0)'
    },
    title: {
        text: 'Mentions'
    },

    exporting: {
    enabled: false 
    },

    xAxis: {
        categories: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28'],
        tickmarkPlacement: 'on',
        title: {
            text: 'May, 2018'
        }
    },
    yAxis: {
        title: {
            text: 'Mentions'
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' Mentions'
    },
    plotOptions: {
        area: {
            // stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Raazi',
        color: 'red',
        data: [12567, 18152.33333, 18500, 18152.33333, 13684.06667, 16756, 20945, 19827.93333, 19827.93333, 16756, 20107.2, 12568, 12084.61538]
    }, {
        name: 'The Past', 
        color: 'green',
        data: [0, 3759, 4946.052632, 4154.684211, 3956.842105, 2769.789474, 4500, 5935.263158, 4200, 4500, 3500, 6726.631579, 6528.789474]
    }, {
        name: 'Veerey Ki Wedding',
        color: 'black',
        data: [0, 0, 0, 0, 0, 15558, 25000, 14585.625, 13613.25, 16287.28125, 15000, 21635.34375, 20662.96875]
    }]
});

// Shares

Highcharts.chart('webshares', {
    chart: {
        type: 'line',
        backgroundColor:'rgba(255, 255, 255, 0)'
    },
    title: {
        text: 'Shares'
    },

    exporting: {
    enabled: false 
    },

    xAxis: {
        categories: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28'],
        tickmarkPlacement: 'on',
        title: {
            text: 'May, 2018'
        }
    },
    yAxis: {
        title: {
            text: 'Shares'
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' Shares'
    },
    plotOptions: {
        area: {
            // stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        // showCheckbox: true,
        name: 'Raazi',
        color: 'red',
        data: [4568, 6598.222222, 7308.8, 6598.222222, 4974.044444, 6090.666667, 7613.333333, 7207.288889, 7207.288889, 6090.666667, 7308.8, 7917.866667, 7613.333333]
    }, {
        name: 'The Past', 
        color: 'green',
        data: [0, 91, 119.7368421, 100.5789474, 95.78947368, 67.05263158, 239.4736842, 143.6842105, 95.78947368, 71.84210526, 71.84210526, 162.8421053, 158.0526316]
    }, {
        name: 'Veerey Ki Wedding',
        color: 'black',
        data: [0, 0, 0, 0, 0, 6745, 8958.203125, 6323.4375, 5901.875, 7061.171875, 7798.90625, 9379.765625, 8958.203125]
    }]
});
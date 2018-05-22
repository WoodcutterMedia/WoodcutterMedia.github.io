// var plotOptions.series.color='rgba(0, 128, 255, 0)'

// Raazi Youtube

Highcharts.chart('raazi-youtube', {
    chart: {
        type: 'line',
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
    },
    title: {
        text: 'YouTube'
    },

    exporting: {
        enabled: false
    },

    xAxis: {
        // allowDecimals: false,
        // type: 'datetime',
        categories: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28'],
        // labels: {
        //   formatter: function () {
        //     return this.value; // clean, unformatted number for year
        //   }
        // }
    },
    yAxis: {
        title: {
            text: 'Engagement'
        },
        labels: {
            formatter: function() {
                return this.value;
            }
        },
        gridLineColor: 'rgba(153, 204, 255, 0.4)'
    },


    // tooltip: {
    //   pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    // },
    plotOptions: {
        area: {
            // pointStart: Date.UTC(2018,0,1),
            // fillColor: {
            //                   linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
            //                   stops: [
            //                       [0, 'indigo'],
            //                       [1, 'lightblue']
            //                   ]
            //               },
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }

    },
    series: [{
        name: 'Views',
        color: 'red',
        data: [12567, 18152.33333, 18500, 18152.33333, 13684.06667, 16756, 20945, 19827.93333, 19827.93333, 16756, 20107.2, 12568, 12084.61538]
    }, {
        name: 'Comments', 
        color: 'magenta',
        data: [4568, 6598.222222, 7308.8, 6598.222222, 4974.044444, 6090.666667, 7613.333333, 7207.288889, 7207.288889, 6090.666667, 7308.8, 7917.866667, 7613.333333]
    }]
});

// Raazi Facebook

Highcharts.chart('raazi-facebook', {
    chart: {
        type: 'line',
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
    },
    title: {
        text: 'Facebook'
    },

    exporting: {
        enabled: false
    },

    xAxis: {
        // allowDecimals: false,
        // type: 'datetime',
        categories: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28'],
        // labels: {
        //   formatter: function () {
        //     return this.value; // clean, unformatted number for year
        //   }
        // }
    },
    yAxis: {
        title: {
            text: 'Engagement'
        },
        labels: {
            formatter: function() {
                return this.value;
            }
        },
        gridLineColor: 'rgba(153, 204, 255, 0.4)'
    },


    // tooltip: {
    //   pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    // },
    plotOptions: {
        area: {
            // pointStart: Date.UTC(2018,0,1),
            // fillColor: {
            //                   linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
            //                   stops: [
            //                       [0, 'indigo'],
            //                       [1, 'lightblue']
            //                   ]
            //               },
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }

    },
    // series: [{
    //     fillOpacity: 0.5,
    //     name: 'Raazi',
    //     showInLegend: false,
    //     data: [
    //         4.5, 6.5, 7.2, 6.5, 4.9, 6, 7.5, 7.1, 7.1, 6, 7.2, 7.8, 7.5, 7.1
    //     ],
    //     color: 'rgba(59,89,152, 1)'
    // }]
    series: [{
        name: 'Mentions',
        color: 'red',
        data: [8168.55, 11799.01667, 12025, 11799.01667, 6500, 10891.4, 13614.25, 12888.15667, 12888.15667, 10891.4, 11000, 8169.2, 7855]
    }, {
        name: 'Shares', 
        color: 'green',
        data: [2969.2, 4288.844444, 4750.72, 4288.844444, 3233.128889, 3958.933333, 4948.666667, 4684.737778, 4684.737778, 3958.933333, 4750.72, 5146.613333, 4948.666667]
    }]
});

// Raazi Twitter

Highcharts.chart('raazi-twitter', {
    chart: {
        type: 'line',
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
    },
    title: {
        text: 'Twitter'
    },

    exporting: {
        enabled: false
    },

    xAxis: {
        // allowDecimals: false,
        // type: 'datetime',
        categories: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28'],
        // labels: {
        //   formatter: function () {
        //     return this.value; // clean, unformatted number for year
        //   }
        // }
    },
    yAxis: {
        title: {
            text: 'Engagement'
        },
        labels: {
            formatter: function() {
                return this.value;
            }
        },
        gridLineColor: 'rgba(153, 204, 255, 0.4)'
    },


    // tooltip: {
    //   pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    // },
    plotOptions: {
        area: {
            // pointStart: Date.UTC(2018,0,1),
            // fillColor: {
            //                   linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
            //                   stops: [
            //                       [0, 'indigo'],
            //                       [1, 'lightblue']
            //                   ]
            //               },
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }

    },
    series: [{
        name: 'Mentions',
        color: 'blue',
        data: [4398.45, 6353.316667, 6475, 6353.316667, 7184.066667, 5864.6, 7330.75, 6939.776667, 6939.776667, 5864.6, 9107.2, 4398.8, 4229.615385]
    }, {
        name: 'Retweets', 
        color: 'navy',
        data: [1598.8, 2309.377778, 2558.08, 2309.377778, 1740.915556, 2131.733333, 2664.666667, 2522.551111, 2522.551111, 2131.733333, 2558.08, 2771.253333, 2664.666667]
    }]
});

// Raazi Search
// Highcharts.chart('raazi-search', {
//     chart: {
//         type: 'column'
//     },
//     data: {
//         // enablePolling: true,
//         csvURL: window.location.origin + 'data/raazi.csv'
//     },
//     title: {
//         text: 'Fruit Consumption'
//     },
//     yAxis: {
//         title: {
//             text: 'Units'
//         }
//     }
// });
Highcharts.chart('raazi-search', {
    chart: {
        type: 'line',
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
    },
    title: {
        text: 'Search Trends'
    },

    exporting: {
        enabled: false
    },

    xAxis: {
        // allowDecimals: false,
        // type: 'datetime',
        categories: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28'],
        // labels: {
        //   formatter: function () {
        //     return this.value; // clean, unformatted number for year
        //   }
        // }
    },
    yAxis: {
        title: {
            text: 'Engagement'
        },
        labels: {
            formatter: function() {
                return this.value;
            }
        },
        gridLineColor: 'rgba(153, 204, 255, 0.4)'
    },


    // tooltip: {
    //   pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    // },
    plotOptions: {
        area: {
            // pointStart: Date.UTC(2018,0,1),
            // fillColor: {
            //                   linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
            //                   stops: [
            //                       [0, 'indigo'],
            //                       [1, 'lightblue']
            //                   ]
            //               },
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }

    },
    series: [{
        fillOpacity: 0.5,
        name: 'Google',
        showInLegend: true,
        data: [
            6, 5, 4, 4, 4, 7, 8, 9, 8, 6, 6, 6, 6, 8, 9, 10, 10, 9, 11, 27, 86, 100, 84, 58, 45, 41, 38, 41, 51
        ],
        color: 'rgba(0, 128, 255, 1)'
    }]
});


// Social Media Performances

Highcharts.chart('raazi-allsocial', {
    chart: {
        type: 'line',
        backgroundColor:'rgba(255, 255, 255, 0)'
    },
    title: {
        text: 'Platform : Performances'
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
        name: 'Mentions',
        // color: 'red',
        data: [12567,18152.33333,18500,18152.33333,13684.06667,16756,20945,19827.93333,19827.93333,16756,20107.2,12568,12084.61538]
    }, {
        name: 'Shares', 
        // color: 'green',
        data: [ 4568,6598.222222,7308.8,6598.222222,4974.044444,6090.666667,7613.333333,7207.288889,7207.288889,6090.666667,7308.8,7917.866667,7613.333333]
    }]
});

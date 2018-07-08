// var plotOptions.series.color='rgba(0, 128, 255, 0)'

// veer Youtube

Highcharts.chart('veer-youtube', {
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
        data: [0, 3759, 4946.052632, 4154.684211, 3956.842105, 2769.789474, 4500, 5935.263158, 4200, 4500, 3500, 6726.631579, 6528.789474]
    }, {
        name: 'Comments', 
        color: 'magenta',
        data: [0, 91, 119.7368421, 100.5789474, 95.78947368, 67.05263158, 239.4736842, 143.6842105, 95.78947368, 71.84210526, 71.84210526, 162.8421053, 158.0526316]
    }]
});

// veer Facebook

Highcharts.chart('veer-facebook', {
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
    //     name: 'veer',
    //     showInLegend: false,
    //     data: [
    //         4.5, 6.5, 7.2, 6.5, 4.9, 6, 7.5, 7.1, 7.1, 6, 7.2, 7.8, 7.5, 7.1
    //     ],
    //     color: 'rgba(59,89,152, 1)'
    // }]
    series: [{
        name: 'Mentions',
        color: 'red',
        data: [0, 2443.35, 2900, 2700.544737, 2571.947368, 1800.363158, 2925, 2500, 2730, 2925, 3000, 4000, 4243.713158]
    }, {
        name: 'Shares', 
        color: 'green',
        data: [0, 59.15, 77.82894737, 65.37631579, 62.26315789, 43.58421053, 155.6578947, 93.39473684, 62.26315789, 46.69736842, 46.69736842, 105.8473684, 102.7342105]
    }]
});

// veer Twitter

Highcharts.chart('veer-twitter', {
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
        data: [0, 1315.65, 2046.052632, 1454.139474, 1384.894737, 969.4263158, 1575, 3435.263158, 1470, 1575, 500, 2726.631579, 2285.076316]
    }, {
        name: 'Retweets', 
        color: 'navy',
        data: [0, 31.85, 41.90789474, 35.20263158, 33.52631579, 23.46842105, 83.81578947, 50.28947368, 33.52631579, 25.14473684, 25.14473684, 56.99473684, 55.31842105]
    }]
});

// veer Search
// Highcharts.chart('veer-search', {
//     chart: {
//         type: 'column'
//     },
//     data: {
//         // enablePolling: true,
//         csvURL: window.location.origin + 'data/veer.csv'
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
Highcharts.chart('veer-search', {
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
            28, 0, 36, 84, 73, 64, 72, 0, 12, 26, 48, 24, 51, 29, 56, 24, 12, 12, 86, 89, 100, 0, 49, 12, 84, 37, 0, 14
        ],
        color: 'rgba(0, 128, 255, 1)'
    }]
});


// Social Media Performances

Highcharts.chart('veer-allsocial', {
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
        data: [3759,4946.052632,4154.684211,3956.842105,2769.789474,4500,5935.263158,4200,4500,3500,6726.631579,6528.789474
]
    }, {
        name: 'Shares', 
        // color: 'green',
        data: [91,119.7368421,100.5789474,95.78947368,67.05263158,239.4736842,143.6842105,95.78947368,71.84210526,71.84210526,162.8421053,158.0526316]
    }]
});

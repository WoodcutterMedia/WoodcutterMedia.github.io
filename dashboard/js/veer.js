
Highcharts.chart('veermain', {
  chart: {
    type: 'area',
    backgroundColor:'rgba(255, 255, 255, 0.0)'
  },
  title: {
    text: 'Historical Performance'
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
      text: 'Woodcutter Index'
    },
    labels: {
      formatter: function () {
        return this.value;
      }
    },
    gridLineColor: 'rgba(153, 204, 255, 1)'
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
    fillOpacity: 0.3,
    name: 'The Past',
    showInLegend: false,
    data: [
      0, 0, 0, 0, 0, 6.4, 8.5, 6, 5.6, 6.7, 7.4, 8.9, 8.5
    ],
    color: 'rgba(0, 128, 255, 1)'
  }]
});

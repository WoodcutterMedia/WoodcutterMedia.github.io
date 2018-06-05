
Highcharts.chart('raazimain', {
  chart: {
    type: 'area',
    backgroundColor:'rgba(255, 255, 255, 0)'
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
    categories: ['-10 Weeks', '-9 Weeks', '-8 Weeks', '-7 Weeks', '-6 Weeks', '-5 Weeks', '-4 Weeks', '-4 Weeks', '-3 Weeks', '-2 Weeks', '-1 Week', 'Release', '+1 Week', '+2 Weeks'],
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
    name: 'Raazi',
    showInLegend: false,
    data: [
      4.5, 6.5, 7.2, 6.5, 4.9, 6, 7.5, 7.1, 7.1, 6, 7.2, 7.8, 7.5, 7.1
    ],
    color: 'rgba(0, 128, 255, 1)'
  }]
});


//Mind Map Raazi

 google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{v:'Raazi', f:'Raazi'},
           '', ''],
          [{v:'Cast', f:'Cast'},
           '', ''],
          ['Alice', 'Mike', ''],
          ['Bob', 'Jim', 'Bob Sponge'],
          ['Carol', 'Bob', '']
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('raazi_chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
      }
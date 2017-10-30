let myChart = document.getElementById('myChart').getContext('2d');

    //Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(myChart, {
      type:'bar',// bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['1800p', '1850p', '1900p', '1950p', '2000p', '2017p'],
        datasets:[{
          label:'Population',
          data:[
            30,
            85,
            134,
            474,
            1173,
            1155
          ],
          //backgroundColor: 'green',
          backgroundColor:[
            'rgba(255, 123, 100, 0.6)',
            'rgba(215, 22, 100, 0.6)',
            'rgba(55, 14, 100, 0.6)',
            'rgba(35, 167, 100, 0.6)',
            'rgba(44, 152, 100, 0.6)',
            'rgba(222, 255, 100, 0.6)',
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBordercolor:'#ff0000'
        }]
      },
      options: {
        title:{
          display:true,
          text:'City population',
          fontSize:25
        },
        legend:{
          display: true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
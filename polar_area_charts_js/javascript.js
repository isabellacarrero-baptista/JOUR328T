//POLAR CHART SCRIPT

var ctxPolar = document.getElementById('myPolarChart').getContext('2d');
      var myChart = new Chart(ctxPolar, {
          type: 'polarArea',
          data: {
            labels: [
              'Children',
              'Government Job',
              'Private',
              'Self-employed',
            ],
            datasets: [{
              label: 'Work type',
              data: [2, 33, 149, 65],
              backgroundColor: [
                '#DB3A34',
                '#177E89',
                '#89177e',
                '#FFC857',
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Most people who had strokes were privately employed'
              },
            subtitle: {
                display: true,
                text: 'Six in 10 people who had strokes were privately employed, according to the Behavioral Risk Factor Surveillance System 2015 survey.'
            }
            }
          }
        });

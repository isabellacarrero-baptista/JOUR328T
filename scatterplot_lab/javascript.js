var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#276b97",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#30937e",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, {
                data: [
                  {x: 68.3, y: 5878}
                ],
                label: "Indonesia",
                borderColor: "#ba3c96",
                backgroundColor: "#f8e9f4",
                borderWidth:2,
              },
              {
                data: [
                  {x: 71.9, y: 11461}
                ],
                label: "Brazil",
                borderColor: "#0ca9ae",
                backgroundColor: "#e3fcfd",
                borderWidth:2,
              },
              {
                data: [
                  {x: 65.4, y: 13173}
                ],
                label: "Russia",
                borderColor: "#59ae0c",
                backgroundColor: "#effde3",
                borderWidth:2,
              },
              {
                data: [
                  {x: 62.6, y: 3366}
                ],
                label: "Pakistan",
                borderColor: "#603cba",
                backgroundColor: "#eee9f8",
                borderWidth:2,
              },
              {
                data: [
                  {x: 65.8, y: 1632}
                ],
                label: "Bangladesh",
                borderColor: "#ae110c",
                backgroundColor: "#fde4e3",
                borderWidth:2,
              },
              {
                data: [
                  {x: 81.1, y: 32193}
                ],
                label: "Japan",
                borderColor: "#8e2e8b",
                backgroundColor: "#f8eaf8",
                borderWidth:2,
              }
              
            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['formerly smoked', 'never smokes', 'smokes', 'unknown'],
        datasets: [{
            label: 'Female',
            data: [49, 70, 45, 53],
            backgroundColor: [
                '#74eb11'
            ]
        },
        {
            label: 'Male',
            data: [51, 30, 55, 47],
            backgroundColor: [
                '#204c05'
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Men who had a stroke are more likely to have smoked than women',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The percentage of men who had a stroke and have smoked is higher than women. However, the majority of women who have had a stroke have never smoked.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                stacked: true
            },
            x: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Percentage of people who have had at least one stroke'
                }
            },
        },
    },
});
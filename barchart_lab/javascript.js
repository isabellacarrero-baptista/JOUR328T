var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Paid Work', 'Education', 'Care for household members', 'Housework', 'Shopping', 'Other unpaid work & volunteering', 'Sleep', 'Eating and drinking', 'Personal care', 'Sports', 'Attending events', 'Seeing friends', 'TV and Radio', 'Other leisure activities'],
        datasets: [{
            label: 'U.S.',
            data: [251, 31, 31, 100, 22, 65, 528, 63, 57, 18, 8, 44, 148, 73],
            backgroundColor: [
                '#ff0800'
            ]
        },
        {
            label: 'China',
            data: [315, 25, 23, 103, 20, 33, 542, 100, 52, 23, 2, 23, 127, 53],
            backgroundColor: [
                '#FFA500'
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Adults in U.S. and China spent most of their waking hours working',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'With the excpetion of sleeping, adults in the United States and China spent most of their time at work.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                stacked: true
            },
            x: {
                stacked: true
            }
        },
    },
});
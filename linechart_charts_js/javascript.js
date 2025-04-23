var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2011', '2012', '2013', '2014', '2015'],
        datasets: [{
            label: 'Hispanic',
            data: [2.6, 2.5, 2.3, 2.6, 2.2, ],
            fill: false,
            borderColor: 'rgba(255, 8, 0)',
            backgroundColor: 'rgba(255, 8, 0, 0.1)',
            tension: 0.1},
        {
            label: 'Non-Hispanic Asian',
            data: [0.7, 1, 0.7, 0.5, 1],
            fill: false,
            borderColor: '#00f7ff',
            backgroundColor: '#d8feff',
            tension: 0.1},
        {
            label: 'Non-Hispanic Black',
            data: [4, 4, 3.6, 4.4, 4.1],
            fill: false,
            borderColor: '#00ff08',
            backgroundColor: '#d8ffd9',
            tension: 0.1},
        {
            label: 'Non-Hispanic White',
            data: [2.3, 2.5, 2.4, 2.4, 2.4],
            fill: false,
            borderColor: '#8800ff',
            backgroundColor: '#edd8ff',
            tension: 0.1},
        {
            label: 'Other',
            data: [4.6, 4.5, 4.7, 4.7, 4.4],
            fill: false,
            borderColor: 'rgba(255, 165, 0)',
            backgroundColor: 'rgba(255, 165, 0, 0.1)',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'About 4% of Black Americans have experienced strokes, the largest rate of all racial demographics',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Black Americans had rate of strokes between 2011 and 2015, about 2% more than the next highest group, Non-Hispanic White Americans. Asian Americans were the only group that increased its stroke rate, jumping .5% in 2015.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Percentage of demographic who have had strokes'
                }
            }
        },
    },
});
// ===========================|| DASHBOARD - BAJAJ AREA CHART ||=========================== //

const chartData = {
    type: 'donut',
    height: 95,
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            }
        }
        // dataLabels: {
        //     enabled: false
        // },
        // stroke: {
        //     curve: 'smooth',
        //     width: 1
        // },
        // tooltip: {
        //     fixed: {
        //         enabled: false
        //     },
        //     x: {
        //         show: false
        //     },
        //     y: {
        //         title: 'Ticket '
        //     },
        //     marker: {
        //         show: false
        //     }
        // }
    },
    series: [
        // {
        //     data: [0, 15, 10, 50, 30, 40, 25]
        // }
        44, 55, 41, 17, 15
    ],
    labels: ['A', 'B', 'C', 'D', 'E']
};

export default chartData;

var ctx = document.getElementById("lightingChart").getContext('2d');//creating objedct of Chart class
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'Light',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 186, 0, 0.2)'
            ],
            borderColor: [
                'rgba(255,186,0,1)'
            ],
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,186,0,0.4)",
            hoverBorderColor: "rgba(255,186,0,1)"
        }]
    },
    options: {
        responsive:true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

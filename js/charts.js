google.charts.load("current", { packages: ["corechart"] });
// google.charts.setOnLoadCallback(drawChart(data[0]));

 
function drawChart(mydata) {    
    var data = google.visualization.arrayToDataTable(mydata);

    var options = {
        title: 'Teste Senai',
        pieHole: 0.4,
        backgroundColor: 'orange',
        height: 500,
        width: 500,
        legend: {position: 'left', textStyle: {color: 'blue', fontSize: 12}}
    };

    var chart = new google.visualization.PieChart(document.querySelector('.myGraphic'));
    chart.draw(data, options);
}

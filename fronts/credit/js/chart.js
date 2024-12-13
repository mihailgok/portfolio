function createChart(chartData) {
    // var colors = ["#CCEAF3", "#F5DAD8", "#D8F5E7"];
    var colors = ["#CCEAF3", "#F5DAD8"];
    var chart = document.querySelector(".chart__svg");
    var sum = chartData.reduce(function (sum, current) {
        return sum + current.amount;
    }, 0);
    var anglSum = 0;
    var i = 0;
    var _loop = function _loop() {
        var one = _chartData[_i];
        var part = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        var angle = 100 * one.amount / sum;
        part.setAttributeNS(null, "stroke", colors[i % colors.length]);
        part.setAttributeNS(null, "r", "15.9155");
        part.setAttributeNS(null, "cx", "50%");
        part.setAttributeNS(null, "cy", "50%");
        part.classList.add("circle");
        part.style.strokeDasharray = "0 ".concat(anglSum, " ").concat(angle, " 100");
        part.id = one.id;

        chart.append(part);

        i++;
        anglSum += angle;
    };
    for (var _i = 0, _chartData = chartData; _i < _chartData.length; _i++) {
        _loop();
    }
}


// document.addEventListener("DOMContentLoaded", function () {
//     var chartData = [
//         {
//             id: 1,
//             name: "Основной долг",
//             amount: 1000
//         },
//         {
//             id: 2,
//             name: "Проценты",
//             amount: 300
//         },
//     ];

//     createChart(chartData);
// });
import Chart from 'chart.js/auto';
import React from 'react';
import { Line } from 'react-chartjs-2';
import "./MyChart.css"

const MyChart = ({ data, color, type }) => {
    const chartData = {
        labels: data.map((datum) => datum.transDate),
        datasets: [
            {
                label: type == 1 && "Income [€]" || type == 2 && "Expense [€]" || type == 3 && "Income - Expense [€]",
                data: data.map((datum) => parseFloat(datum.transValue)),
                borderColor: color,
                backgroundColor: `rgba(${color === "purple" ? "255, 0, 255" : "54, 162, 235"}, 0.2)`,
                pointRadius: 0,
                fill: true,
                tension: 0.4 // Erhöhe den Tension-Wert, um die Linie weicher zu machen
            }
        ],

    };

    return <Line data={chartData} />;
};


export default MyChart;

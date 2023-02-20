import Chart from 'chart.js/auto';
import React from 'react';
import { Line } from 'react-chartjs-2';
import "./MyChart.css"

const MyChart = ({ data, color, type }) => {

    const options = {
        scales: {
            x: {
                type: 'time', // Falls die Labels auf der X-Achse Datumsangaben sind
                time: {
                    unit: 'month' // Definiere die Zeitspanne, die auf der X-Achse angezeigt werden soll
                },
                ticks: {
                    autoSkip: true, // automatisches Überspringen von Labeln, wenn es zu viele gibt
                    maxTicksLimit: 2, // maximale Anzahl der anzuzeigenden Label
                }
            },
            y: {
                beginAtZero: true // Setze den Startwert der Y-Achse auf 0
            }
        }
    };


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

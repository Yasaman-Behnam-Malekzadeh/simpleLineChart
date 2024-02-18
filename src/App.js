import "./App.css";
import React from "react";
import zoomPlugin from "chartjs-plugin-zoom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
//use chart.js
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

function App() {
  //data for line chart
  const data = {
    labels: [
      15, 15, 15, 15, 15, 15, 16, 17, 18, 22, 25, 30, 40, 40, 40, 40, 40, 40,
      42,
    ],
    //data mock for label
    datasets: [
      {
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [
          350, 350, 350, 350, 350, 350, 360, 370, 400, 450, 500, 550, 580, 600,
          600, 600, 600, 600, 600,
        ],
        //data mock for the chart
      },
    ],
  };
  //options for line chart
  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true, // set for label
        max: 1000,
        min: 0,
      },
      y: {
        beginAtZero: true, // set for label
        max: 1000,
        min: 0,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart",
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };

  return (
    <div className="App">
      <Line data={data} options={options} />
      {/* line chart with data and options */}
    </div>
  );
}

export default App;

import React from "react";
import moment from "moment";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";

Chart.plugins.register(ChartDataLabels);

const data = {
  datasets: [
    {
      label: "",
      fill: true,
      backgroundColor: "blanchedalmond",
      borderColor: "orange",
      pointRadius: 0,
      datalabels: {
        color: "grey"
      }
    }
  ]
};

const options = {
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        color: "rgba(255, 255, 255, 0)"
      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: false
        }
      }
    ]
  }
};

export default function Hourly({ hourly }) {
  data.labels = hourly.map((h) => moment.unix(h.dt).format("h a"));
  data.datasets[0].data = hourly.map((h) => Math.floor(h.temp));
  //console.log(data)
  return (
    <React.Fragment>
      <Line data={data} options={options} />
    </React.Fragment>
  );
}

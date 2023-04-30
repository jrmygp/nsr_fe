import React from "react";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  RadialLinearScale,
  Filler,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  RadialLinearScale,
  Filler
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      ticks: {
        display: true,
        backdropColor: "transparent",
        color: "#fff",
        stepSize: 10,
      },
      pointLabels: {
        color: "#fff",
      },
      grid: {
        color: "#5600e8",
        lineWidth: 2,
      },
    },
  },
};

export function RadarChart(props) {
  const { data } = props;
  data.datasets.map((item, index) => {
    data.datasets[index] = {
      ...item,
    };
  });

  return <Radar options={options} data={data} />;
}

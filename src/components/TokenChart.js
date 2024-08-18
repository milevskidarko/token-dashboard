import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const TokenChart = ({ data }) => {
  const token = data?.result?.["0xea51801b8f5b88543ddad3d1727400c15b209d8f"];
  const labels = token?.lp_holders?.map((lpHolder) => lpHolder.address) || [];
  const balances = token?.lp_holders?.map((lpHolder) => lpHolder.balance) || [];
  const percentages =
    token?.lp_holders?.map((lpHolder) => lpHolder.percent) || [];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Balance",
        data: balances,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        yAxisID: "y",
      },
      {
        label: "Percent",
        data: percentages,
        borderColor: "rgba(153,102,255,1)",
        backgroundColor: "rgba(153,102,255,0.2)",
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Balance",
        },
      },
      y1: {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "Percent",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="token-chart">
      <h2>Token Chart</h2>
      <div className="chart-container">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TokenChart;

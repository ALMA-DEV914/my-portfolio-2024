// SkillsPieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const SkillsPieChart = ({ skills }) => {
  const data = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        data: skills.map(skill => parseInt(skill.level)),
        backgroundColor: [
          "#2E8B57", // Forest Green
          "#6B8E23", // Olive Green
          "#F4A460", // Sandy Beige
          "#D95D39", // Terracotta
          "#708090", // Slate Gray
          "#8B4513", // Clay Brown
          "#8A9A5B", // Moss Green
          "#D8A4A2", // Dusty Rose
          "#36454F", // Charcoal
        ],
      },
    ],
  };

  return (
    <Pie
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = context.raw || "";
                return `${label}: ${value}%`;
              },
            },
          },
        },
      }}
    />
  );
};

export default SkillsPieChart;

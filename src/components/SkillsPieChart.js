import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const SkillsPieChart = ({ skills }) => {
  const [centerText, setCenterText] = useState(""); // For displaying hovered value in the center

  const data = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        data: skills.map((skill) => parseInt(skill.level)),
        backgroundColor: [
          "rgba(46, 139, 87, 0.8)", // Forest Green
          "rgba(107, 142, 35, 0.8)", // Olive Green
          "rgba(244, 164, 96, 0.8)", // Sandy Beige
          "rgba(217, 93, 57, 0.8)", // Terracotta
          "rgba(112, 128, 144, 0.8)", // Slate Gray
          "rgba(139, 69, 19, 0.8)", // Clay Brown
          "rgba(138, 154, 91, 0.8)", // Moss Green
          "rgba(216, 164, 162, 0.8)", // Dusty Rose
          "rgba(54, 69, 79, 0.8)", // Charcoal
        ],
        hoverBackgroundColor: [
          "rgba(46, 139, 87, 1)", // Brightened Forest Green
          "rgba(107, 142, 35, 1)", // Brightened Olive Green
          "rgba(244, 164, 96, 1)", // Brightened Sandy Beige
          "rgba(217, 93, 57, 1)", // Brightened Terracotta
          "rgba(112, 128, 144, 1)", // Brightened Slate Gray
          "rgba(139, 69, 19, 1)", // Brightened Clay Brown
          "rgba(138, 154, 91, 1)", // Brightened Moss Green
          "rgba(216, 164, 162, 1)", // Brightened Dusty Rose
          "rgba(54, 69, 79, 1)", // Brightened Charcoal
        ],
        borderWidth: 2,
        cutout: "70%", // Makes it a donut chart
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            family: "Arial, sans-serif",
          },
        },
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
    onHover: (event, elements) => {
      if (elements.length) {
        const index = elements[0].index;
        setCenterText(`${skills[index].level}%`);
      } else {
        setCenterText("");
      }
    },
  };

  return (
    <div style={{ position: "relative", width: "400px", margin: "0 auto" }}>
      <Pie data={data} options={options} />
      {centerText && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#36454F",
            pointerEvents: "none",
          }}
        >
          {centerText}
        </div>
      )}
    </div>
  );
};

export default SkillsPieChart;

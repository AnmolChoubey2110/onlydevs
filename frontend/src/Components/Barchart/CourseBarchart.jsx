import React, { Component } from "react";
import "./Barchart.css"
import { HorizontalBar } from "react-chartjs-2";
const CourseBarChart = () => {
  const dataHorBar = {
    labels: ["Full Stack Devlopment", "Basics of UI", "Java and OOPs Concepts"],
    datasets: [
      {
        label: "My First Dataset",
        fill: false,

        data: [30, 70, 20, 100, 0],
        backgroundColor: [
          "rgba(252, 227, 0, 1)",
          "rgba(184, 100, 250, 1)",
          "rgba(78, 199, 163, 1)",   
        ],
        borderColor: [
          "rgba(252, 227, 0, 1)",
          "rgba(184, 100, 250, 1)",
          "rgba(78, 199, 163, 1)",     
        ],
        barPercentage: 0.25,
        borderRadius: 20,
        borderSkipped:10,
      
      },
    ],
  };

  return (
    <div className="barChart">   
      <HorizontalBar data={dataHorBar} />
    </div>
  );
};
export default CourseBarChart;

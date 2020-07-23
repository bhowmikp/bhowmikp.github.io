import React, { useEffect, useState, useRef } from "react";
import Chartjs from "chart.js";

const createChartConfig = (data: object) => {
  const chartConfig = {
    type: "pie",
    data: {
      //Bring in data
      labels: Object.keys(data),
      datasets: [
        {
          label: "Languages Used in Projects",
          data: Object.values(data),
          backgroundColor: [
            "rgba(243, 75, 125, 0.2)",
            "rgba(46, 49, 49, 0.2)",
            "rgba(43, 116, 137, 0.2)",
            "rgba(79, 93, 149, 0.2)",
            "rgba(176, 114, 25, 0.2)",
            "rgba(53, 114, 165, 0.2)",
            "rgba(108, 122, 137, 0.2)",
            "rgba(178, 183, 248, 0.2)",
            "rgba(241, 224, 90, 0.2)",
            "rgba(137, 224, 81, 0.2)",
            "rgba(61, 97, 23, 0.2)",
            "rgba(0, 173, 216, 0.2)"
          ],
          borderColor: [
            "rgba(243, 75, 125, 1)",
            "rgba(46, 49, 49, 1)",
            "rgba(43, 116, 137, 1)",
            "rgba(79, 93, 149, 1)",
            "rgba(176, 114, 25, 1)",
            "rgba(53, 114, 165, 1)",
            "rgba(108, 122, 137, 1)",
            "rgba(178, 183, 248, 1)",
            "rgba(241, 224, 90, 1)",
            "rgba(137, 224, 81, 1)",
            "rgba(61, 97, 23, 1)",
            "rgba(0, 173, 216, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      legend: {
        position: "right"
      },
      title: {
        display: true,
        fontSize: 14,
        fontStyle: "bold",
        text: "Languages Used in Projects"
      }
    }
  };

  return chartConfig;
};

const GithubLanguageGraph = ({ data }) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(
        chartContainer.current,
        createChartConfig(data)
      );
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default GithubLanguageGraph;

import axios from "axios";
import React, { useEffect, useState } from "react";
import DrawBarChart from "../DawBarChart";
import DrawAreaChart from "../DrawAreaChart";
import DrawLineChart from "../DrawLineCart";
import DrawPieChart from "../DrawPieChart";

const Statistics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
      const totalLoadedData = data.data.data;
      setData(totalLoadedData);
    });
  }, []);
  return (
    <div className="container ml-sm-5 ml-lg-0 mt-5">
      <div className="mb-5 ">
        <h2 className="text-center mb-5">Line chart</h2>
        <DrawLineChart data={data} xAxis="name" dataKey={"total"} />
      </div>
      <div className="mb-5 ">
        <h2 className="text-center mb-5">Bar chart</h2>
        <DrawBarChart data={data} xAxis="name" dataKey={"total"} />
      </div>
      <div className="mb-5 ">
        <h2 className="text-center mb-5">Area Chart</h2>
        <DrawAreaChart data={data} xAxis="name" dataKey={"total"} />
      </div>
      <div className="mb-5 ">
        <h2 className="text-center mb-5">Pie chart</h2>
      <DrawPieChart
                  data={data}
                  firstDataKey={"name"}
                  secondDataKey={"total"}
               />
      </div>
    </div>
  );
};

export default Statistics;

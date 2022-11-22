import React from "react";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const DrawBarChart = ({ data, dataKey, xAxis,...props}) => {
  
  return (
    <div>
      <ResponsiveContainer width='100%' height={250}>
        <BarChart {...props} data={data}>
        <XAxis dataKey={xAxis} />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
          <Bar dataKey={dataKey} fill="#AED581" />
          
        </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default DrawBarChart;

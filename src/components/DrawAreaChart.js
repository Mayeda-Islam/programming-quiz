import React from "react";
import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DrawAreaChart = ({ data, dataKey, xAxis, ...props }) => {
  return (
    <ResponsiveContainer  width="100%" height={250}>
      <AreaChart
        data={data}
        {...props}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey={xAxis} />
        <YAxis />
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          height={36}
          wrapperStyle={{ lineHeight: "50px" }}
        />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DrawAreaChart;

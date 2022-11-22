import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DrawLineChart from '../DrawLineCart';

const Statistics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
      const totalLoadedData = data.data.data;
      
      console.log(totalLoadedData);
      setData(totalLoadedData);
    });
  }, []);
  return (
    <div>
      <DrawLineChart data={data} xAxis="name" dataKey={"total"} />
    </div>
  );
};

export default Statistics;





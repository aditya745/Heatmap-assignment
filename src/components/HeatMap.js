import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";
import initialState from "../data";

const HeatMap = () => {
    
  const [data, setData] = useState(initialState);
    useEffect(() => {
        setData(initialState)
    }, [data]);

    return (
      <Chart
        options={data.options}
        series={data.series}
        type="heatmap"
        height="350"
        width="100%"
      />
    );
}

export default HeatMap;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { fetchCoinsHistory } from "../../../Data/Api";

const OverviewChart = ({ coinInfo }) => {
  const { isLoading, data } = useQuery({
    queryKey: ["coinHistory", coinInfo],
    queryFn: () => fetchCoinsHistory(coinInfo.uuid),
  });

  return (
    <div>
      <ReactApexChart
        type="line"
        series={[
          {
            name: coinInfo.name,
            data: data?.data?.history.map((coin) => coin.price),
          },
        ]}
        options={{
          theme: {},
          chart: {
            height: "10px",
            toolbar: {
              show: false,
            },
            background: "transparent",
          },
          fill: {},
          stroke: {
            width: 3,
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            labels: { show: false },
          },
        }}
      />
    </div>
  );
};

export default OverviewChart;

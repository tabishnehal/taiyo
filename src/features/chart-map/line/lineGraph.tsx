// react
import React from "react";
// numeral
import numeral from "numeral";
// react-chartjs
import { Line } from "react-chartjs-2";
// react-query
import { useQuery } from "@tanstack/react-query";
// react-icons
import { Loader } from "../../../utils/loader";
import { DataError } from "../../../utils/error";

const options = {
  plugins: {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem: any, data: any) {
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: 11,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            callback: function (value: any, index: any, values: any) {
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
  },
};

const buildChartData = (data: any) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[date] - lastDataPoint,
      };
      if (data[date] - lastDataPoint >= 0) chartData.push(newDataPoint);
    }
    lastDataPoint = data[date];
  }
  return chartData;
}

export function LineGraph({ casesType, casesTypeData }: { casesType: string, casesTypeData: any }) {

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['covidDailyData', casesType],
    queryFn: async () => buildChartData(casesTypeData)
  });

  if (isLoading) {
    return <Loader message={`Loading ${casesType.charAt(0).toUpperCase() + casesType.slice(1)} Chart...`} />
  }

  if (isError)
    return <DataError error={error} />

  return (
    <div className="cardLine md:flex md:flex-col">
      {(data as any).length > 0 && (
        <>
          <p className="font-bold text-center mb-2">Worldwide new {casesType}</p>
          <Line
            data={{
              datasets: [
                {
                  backgroundColor: casesType === "recovered" ? "green"
                    : casesType === "cases" ? "blue"
                      : "rgba(204, 16, 52, 0,5)",
                  borderColor: casesType === "recovered" ? "green"
                    : casesType === "cases" ? "blue"
                      : `#CC1034`,
                  data: data,
                },
              ],
            }}
            options={options}
          />
        </>
      )}
    </div>
  );
}
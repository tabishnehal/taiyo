// react
import React, { useState } from "react";
// react-icons
import { FaSpinner } from "react-icons/fa";
// react-query
import { useQuery } from "@tanstack/react-query";
// feature file
import { LineGraph } from "./lineGraph";

const LineGraphLayout = () => {

  const [casesType, setCasesType] = useState("cases");

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['covidDailyData'],
    queryFn: async () => await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => response.json())
  });

  if (isLoading) {
    return <div>
      <FaSpinner className="w-10 h-10 animate-spin mx-auto" />
      <p className="text-center">Loading Graph Layout...</p>
    </div>
  }
  if (isError)
    return <span className='text-red-400'>{(error as any).message ? (error as any).message : error}</span>

  return (
    <>
      <div className='flex flex-row gap-1'>
        <button type='button' className={`cardBox border-blue-400 hover:bg-blue-700 flex-1 ${casesType === "cases" && "btn-blue"}`} onClick={() => setCasesType("cases")}>
          Cases
        </button>
        <button type='button' className={`cardBox border-green-400 hover:bg-green-700 flex-1 ${casesType === "recovered" && "btn-green"}`} onClick={() => setCasesType("recovered")}>
          Recovered
        </button>
        <button type='button' className={`cardBox border-red-400 hover:bg-red-700 flex-1 ${casesType === "deaths" && "btn-red"}`} onClick={() => setCasesType("deaths")}>
          Deaths
        </button>
      </div>
      <LineGraph casesType={casesType} casesTypeData={data[casesType]} />
    </>
  );
}

export default LineGraphLayout;
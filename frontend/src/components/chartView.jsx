import React, { useEffect } from "react";
import CardView from "./cardView";
import { getEmployees } from "../hook/useQueries";

export default function ChartView() {
  const { data: employeeDetails, isLoading, error } = getEmployees();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-10">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CardView employeeDetails={employeeDetails} />
      )}
      {error && error.message}
    </div>
  );
}

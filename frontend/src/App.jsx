import React from "react";
import "./App.css";
import ChartView from "./components/ChartView";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChartView />
    </QueryClientProvider>
  );
}

export default App;

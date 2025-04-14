import React from "react";
import { Position, ReactFlow } from "@xyflow/react";

function CardView({ employeeDetails }) {
  const nodes = employeeDetails.map((employee, index) => ({
    id: employee.id.toString(),
    type: "individualCard",
    name: employee.name,
    position: { x: index * 200, y: 200 },
    data: { ...employee },
    draggable: false,
  }));

  const edges = employeeDetails
    .filter((employee) => employee.manager)
    .map((employee) => ({
      id: `e-${employee.manager}-${employee.id}}`,
      source: employee.manager.toString(),
      target: employee.id.toString(),
    }));

  console.log("nodes", nodes);
  console.log("edges", edges);

  return (
    <div className="flex flex-col gap-5">
      <ReactFlow
        className="![overflow:unset]"
        nodes={nodes}
        edges={edges}
        nodeTypes={{ individualCard: IndividualCard }}
        fitView
      />
    </div>
  );
}

function IndividualCard({ data }) {
  console.log("data", data);
  return (
    <div
      className="w-70 h-auto shadow-sm px-5 py-2 bg-white/20 shadow-sm flex flex-col items-center justify-center gap-2"
      key={data.id}>
      <h1 className="text-black text-lg">{data.name}</h1>
      <h4 className="text-gray-700 text-md">{data.role}</h4>
      <h5>{data.manager}</h5>
    </div>
  );
}

export default CardView;

import React from "react";
import {
  RadialBarChart as RadialBarChartComponent,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: " Received", value: 1400, fill: "#fca63f" },
  { name: "Processed", value: 546, fill: "#a8d3fe" },
  { name: " Granted", value: 840, fill: "#fe9100" },
  { name: "Enrolled", value: 600, fill: "#2c76d2" },
];

const AdmissionBreakdownChart=()=>{
  return (
    <div className="p-4 ">
      <h2 className="text-lg font-semibold mb-4">Admission Breakdown</h2>
      <ResponsiveContainer width={"100%"}  height={400} >
        <RadialBarChartComponent
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="100%"
          barSize={20}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="value"
          />
         <Legend
  margin={2}
  iconSize={8}
  layout="horizontal"
  align="center"
  verticalAlign="bottom"
  wrapperStyle={{ fontSize: "14px" }} 
/>

        </RadialBarChartComponent>
      </ResponsiveContainer>
    </div>
  );
}
export default AdmissionBreakdownChart
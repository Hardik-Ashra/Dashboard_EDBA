import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "CBSE", admitted: 5000, total: 10000 },
  { name: "CISCE", admitted: 7500, total: 10000, highlight: true },
  { name: "NIOS", admitted: 6500, total: 10000 },
  { name: "MSBSHSE", admitted: 3500, total: 10000 },
  { name: "GSEB", admitted: 5000, total: 10000 },
  { name: "BSEB", admitted: 7000, total: 10000 },
  { name: "WBCHSE", admitted: 7200, total: 10000 },
  { name: "PSEB", admitted: 6000, total: 10000 },
  { name: "UPMSP", admitted: 4000, total: 10000 },
  { name: "IB", admitted: 4500, total: 10000 },
  { name: "IGCSE", admitted: 7300, total: 10000 },
  { name: "Waldorf", admitted: 7800, total: 10000 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-md rounded-md text-xs border border-gray-300">
        <p className="font-semibold">{payload[0].payload.name}</p>
        <p>{`Admitted: ${payload[0].value}`}</p>
        <p>{`Total: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const EducationBoardChart = () => {
  return (
    <div className="p-6 w-full">
      <h2 className="text-lg font-semibold mb-10 text-gray-700 ">
        Admission Statistics by Education Board – Comparative Analysis
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} barSize={30} barGap={5}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#1e2939 " }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 10000]}
            tick={{ fontSize: 12, fill: "#1e2939 " }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
          <Bar dataKey="admitted" stackId="a" stroke="#ddd"  radius={[0, 0, 5, 5]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.highlight ? "#aad2ff" : "#ffd6ad"}
              />
            ))}
          </Bar>
          <Bar dataKey={(entry) => entry.total - entry.admitted} stackId="a" radius={[5, 5, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-bg-${index}`} fill="#f1f1f3" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EducationBoardChart;

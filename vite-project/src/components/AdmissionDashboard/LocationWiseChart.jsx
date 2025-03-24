import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const colors = {
  virar: "#9DABC3",
  nallasopara: "#FE9002",
  navimumbai: "#D4881C",
  dahisar: "#D9C2AA",
  thane: "#A7D4FF",
  kalyan: "#2B78CA",
  vasai: "#FCD8AC",
};

const data = [
  { name: "Virar", Value: 4000, color: colors.virar },
  { name: "Nallasopara", Value: 3000, color: colors.nallasopara },
  { name: "Navi Mumbai", Value: 2000, color: colors.navimumbai },
  { name: "Dahisar", Value: 2780, color: colors.dahisar },
  { name: "Thane", triangleValue: 1890, color: colors.thane },
  { name: "Kalyan", triangleValue: 2390, color: colors.kalyan },
  { name: "Vasai", triangleValue: 3490, color: colors.vasai },
];

const TriangleBar = ({ fill, x, y, width, height }) => (
  <path
    d={`M${x},${y + height} C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y} C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height} Z`}
    stroke="none"
    fill={fill}
  />
);

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    const { name, Value, triangleValue } = payload[0].payload;
    return (
      <div className="bg-white p-2 shadow-md border rounded-md text-sm">
        <p className="font-semibold">{name}</p>
        {Value && <p> Value: {Value}</p>}
        {triangleValue && <p> Value: {triangleValue}</p>}
      </div>
    );
  }
  return null;
};

const LocationBarChart = () => (
  <div className="w-full p-4 ">
    <h2 className="text-lg font-semibold mb-8">Location Wise Classification</h2>
    <ResponsiveContainer height={380} >
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
        <CartesianGrid strokeDasharray="4 4" stroke="#ddd" />
        <XAxis dataKey="name" tick={{ fill: "#555", fontSize: 12 }} tickLine={false} interval={0} />
        <YAxis tick={{ fill: "#555", fontSize: 12 }} tickLine={false} domain={[0, "auto"]} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />

        <Bar dataKey="Value" barSize={30} radius={[5, 5, 0, 0]} stackId="bar">
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
          <LabelList dataKey="Value" position="top" fontSize={14} fontWeight="bold" />
        </Bar>

        <Bar dataKey="triangleValue" shape={<TriangleBar />} barSize={40} stackId="bar">
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
          <LabelList dataKey="triangleValue" position="top" fontSize={14} fontWeight="bold" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default LocationBarChart;

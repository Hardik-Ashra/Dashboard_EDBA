import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell } from "recharts";

const data = [
  { name: "General (Open)", value: 530, color: "#D9C2AA" },
  { name: "OBC", value: 915, color: "#FE9002" },
  { name: "SC", value: 785, color: "#9DABC1" },
  { name: "ST", value: 345, color: "#D68620" },
  { name: "NT", value: 915, color: "#2B78CA" },
  { name: "VJ", value: 260, color: "#FCD8AC" },
];
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white border rounded-md shadow-md text-sm">
        <p>{`${payload[0].payload.name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};
const CustomLabel = (props) => {
  const { x, y, width, height, value } = props;

  if (!value) return null;

  return (
    <g>
      {/* White Background */}
      <rect 
        x={x + width - 42}  // Adjust the position inside the bar
        y={y + height / 10}  
        width={40} 
        height={21} 
        fill="white" 
        rx={10} 
        ry={10} 
        stroke="none"
      />
      {/* Text inside the white background */}
      <text 
        x={x + width - 22} 
        y={y + height / 2} 
        fill="black" 
        fontSize={14} 
        textAnchor="middle" 
        alignmentBaseline="middle"
      >
        {value}
      </text>
    </g>
  );
};
const CasteRatioChart = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-900">Caste Ratio</h2>
      
      <ResponsiveContainer  height={250} >
      <h1 className="text-4xl font-bold mt-5 mb-5">10,587</h1>
        <BarChart layout="vertical" data={data} margin={{  right: 20 }} className=" text-gray-700">
          <XAxis type="number" axisLine={false} tickLine={false} hide />
          <YAxis
            type="category"
            dataKey="name"
            width={120}
            tick={{ fontSize: 14, fill: "#444" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f5f5f5" }}  />
          <Bar dataKey="value" barSize={26} radius={[100, 100, 100, 100]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
             <LabelList dataKey="value" content={<CustomLabel />} />
          </Bar>
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CasteRatioChart;

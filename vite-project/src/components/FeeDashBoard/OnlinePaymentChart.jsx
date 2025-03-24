import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell } from "recharts";
import  {CalendarButton}  from "../ui/CalendarButton.jsx";

const data = [
    { name: "UPI", value: 530, color: "#d9c2aa" },
    { name: "Net Banking", value: 915, color: "#65b3fe" },
    { name: "Card", value: 785, color: "#ffb37a" },
    { name: "Wallets", value: 345, color: "#9dabc1" },
    { name: "Cheque", value: 915, color: "#fcd8ac" },
    { name: "Etc", value: 260, color: "#a8d3ff" },
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
const OnlinePaymentsChart = () => {
  return (
    <div className="p-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Online Payments</h2>
        <CalendarButton Text="2024-2025"/>
      </div>
      <h1 className="text-4xl font-bold mt-3 mb-5">10,587</h1>
      <ResponsiveContainer height={400}>
        <BarChart layout="vertical" data={data} margin={{ right: 20 }}>
          <XAxis type="number" axisLine={false} tickLine={false} hide />
          <YAxis
            type="category"
            dataKey="name"
            width={120}
            tick={{ fontSize: 14, fill: "#444" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f5f5f5" }} />
          <Bar dataKey="value" barSize={26} radius={[50, 50, 50, 50]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="value" content={<CustomLabel />} />
            {/* <LabelList dataKey="value" position="insideRight" fill="black" style={{ fontSize: 14 }} /> */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OnlinePaymentsChart;

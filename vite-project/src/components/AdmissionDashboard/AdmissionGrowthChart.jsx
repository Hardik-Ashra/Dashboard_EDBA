import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Institute 1", value: 50 },
  { name: "Institute 2", value: 80 },
  { name: "Institute 3", value: 120 },
  { name: "Institute 4", value: 90 },
  { name: "Institute 5", value: 100 },
  { name: "Institute 6", value: 110 },
  { name: "Institute 7", value: 105 },
  { name: "Institute 8", value: 115 },
  { name: "Institute 9", value: 130 },
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

const AdmissionGrowthChart = () => {
  return (
    <div className="w-full mt-2 mb-10 rounded-lg px-8">
      <div>
        <h2 className="text-xl font-semibold flex items-center">
          Rs 12,00,389
          <span className="ml-2 px-3 py-1 text-green-700 text-xs rounded-full border border-green-500 font-medium shadow-sm">230</span>
        </h2>
        <div className="text-green-600 text-sm">▲ 10.2 <span className="text-black">+1.01% this Month</span>
        </div>
      </div>
      <div className="block  sm:flex justify-between items-end mt-4 gap-2">
        <div>
          <h1 className="font-bold text-xl text-black ">
            Admission Growth
          </h1>
          <p className="text-sm">Yearly<br />Report</p>
        </div>
        <ResponsiveContainer  height={350}>
          <AreaChart data={data} margin={{ top: 20, right: 0, left: 40, bottom: 20 }}>
            <defs>
              <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10" stopColor="#FF9002" stopOpacity={0.1} />
                <stop offset="90%" stopColor="#FF9002" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={true} horizontal={false} stroke="#ddd" strokeDasharray="6 6" />
            <XAxis dataKey="name" tickMargin={10} tickLine={false}   axisLine={false} tick={{ fontSize: 14 }} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="value" fill="url(#colorGrowth)" stroke="#FFA500" strokeWidth={3} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdmissionGrowthChart;

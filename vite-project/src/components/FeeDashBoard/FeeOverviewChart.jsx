import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import  {CalendarButton}  from "../ui/CalendarButton.jsx";

const data = [
  { name: "Page A", feePaid: 4000, feeBalance: 1500, chequeReturn: 2000 },
  { name: "Page B", feePaid: 3000, feeBalance: 2000, chequeReturn: 1000 },
  { name: "Page C", feePaid: 10000, feeBalance: 4000, chequeReturn: 500 },
  { name: "Page D", feePaid: 5000, feeBalance: 2500, chequeReturn: 1500 },
  { name: "Page E", feePaid: 3500, feeBalance: 1700, chequeReturn: 1200 },
  { name: "Page F", feePaid: 4500, feeBalance: 1600, chequeReturn: 1800 },
  { name: "Page G", feePaid: 6000, feeBalance: 2100, chequeReturn: 2200 }
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-md border">
        <p className="font-semibold text-gray-900 text-lg">{payload[0].payload.name}</p>
        <p className="text-[#80bcf2] font-medium">Fee Paid: {payload[0].value}</p>
        <p className="text-[#ebb119] font-medium">Fee Balance: {payload[1].value}</p>
        <p className="text-[#098dfc] font-medium">Cheque Return: {payload[2].value}</p>
      </div>
    );
  }
  return null;
};

const FeeOverviewChart = () => {
  return (
    <div className="w-full h-[520px] mt-4">
      <div className="ml-7 mb-8 flex justify-between mr-10 items-center">
        <h2 className="text-3xl font-bold text-gray-900">Fee Overview</h2>
        <CalendarButton Text="February"/>
      </div>
      <ResponsiveContainer height={350}>
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#ddd" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#555", fontSize: 12 }} tickLine={{ stroke: "#6b7280" }} axisLine={{ fill: "#93c5fd" }} interval={0} />
          <YAxis tick={{ fill: "#555", fontSize: 12 }} domain={[0, "auto"]} tickLine={{ stroke: "#6b7280" }} />
          <Tooltip content={<CustomTooltip />} />
          <defs>
            <linearGradient id="colorFeePaid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#80bcf2" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#80bcf2" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorFeeBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ebb119" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ebb119" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorChequeReturn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#098dfc" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#098dfc" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area type="monotone" dataKey="feePaid" stroke="#80bcf2" strokeWidth={3} fill="url(#colorFeePaid)" />
          <Area type="monotone" dataKey="feeBalance" stroke="#ebb119" strokeWidth={3} fill="url(#colorFeeBalance)" />
          <Area type="monotone" dataKey="chequeReturn" stroke="#098dfc" strokeWidth={3} fill="url(#colorChequeReturn)" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-center ml-3 gap-10 my-4 text-sm font-normal text-gray-700">
        <div >
          <p className="flex items-center gap-2">
            <span className="w-4 h-4  bg-[#80bcf2] inline-block  rounded"></span>
            Fee Paid</p>

        </div>
        <div>
          <p className="flex items-center gap-2">
            <span className="w-4 h-4 bg-[#ebb119]  inline-block rounded"></span>
            Fee Balance</p>

        </div>
        <div>
          <p className="flex items-center gap-2">
            <span className="w-4 h-4 bg-[#098dfc]  inline-block rounded"></span>
            Cheque Return</p>

        </div>
      </div>
    </div>
  );
};

export default FeeOverviewChart;

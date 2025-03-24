import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "VIT", students: 300, filled: 150, admission: 50 },
  { name: "Law", students: 250, filled: 130, admission: 40 },
  { name: "Pharma", students: 400, filled: 200, admission: 60 },
  { name: "Degree", students: 350, filled: 170, admission: 55 },
  { name: "Diploma", students: 300, filled: 180, admission: 45 },
  { name: "Junior Clg", students: 270, filled: 140, admission: 50 },
  { name: "Utkarsh Primary", students: 380, filled: 190, admission: 70 },
  { name: "BCOE", students: 320, filled: 160, admission: 60 },
  { name: "Utkarsh Pre Primary", students: 340, filled: 150, admission: 50 },
  { name: "Utkarsh Secondary", students: 330, filled: 170, admission: 55 },
  { name: "Applied Arts", students: 280, filled: 140, admission: 40 }
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-md border">
        <p className="font-semibold text-gray-900 text-lg">{payload[0].payload.name}</p>
        <p className="text-[#FF9002] font-medium">No of Students: {payload[0].value}</p>
        <p className="text-[#2B78CA] font-medium">Form Filled: {payload[1].value}</p>
        <p className="text-[#A8D3FE] font-medium">Admission Taken: {payload[2].value}</p>
      </div>
    );
  }
  return null;
};

const AdmissionChart = () => {
  return (
    <div className="w-full h-[520px] mt-4 ">
      <div className="ml-7">
        <h2 className="text-3xl font-bold text-gray-900">Admission Process</h2>
        <div className="sm:flex justify-start ml-3 gap-10 my-4 text-md font-normal block  text-gray-700">
          <div className="max-sm:mb-2">
            <p className="flex items-center gap-2 text-gray-700">
              <span className="w-4 h-4 bg-[#FF9002] inline-block  rounded"></span>
              No of Students</p>
            <span className="font-bold pl-8 text-xl text-gray-900">2,620,120</span>
          </div>
          <div className="max-sm:mb-2 text-gray-700">
            <p className="flex items-center gap-2">
              <span className="w-4 h-4 bg-[#2B78CA]  inline-block rounded"></span>
              Form Filled</p>
            <span className="font-bold pl-8 text-xl text-gray-900">180,410</span>
          </div>
          <div className="max-sm:mb-2 text-gray-700">
            <p className="flex items-center gap-2">
              <span className="w-4 h-4 bg-[#A8D3FE] text-xl  inline-block rounded"></span>
              Admission Taken</p>
            <span className="font-bold pl-8 text-gray-900">861</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer  height={350} >
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 14, wordBreak: "break-word" }} tickLine={false} dx={12} interval={0} dy={2} textAnchor="middle" tickFormatter={(name) => name.replace(" ", "\t")} />
          <YAxis tick={{ fill: "#6b7280", fontSize: 14 }} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <defs>
            <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF9002" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#FF9002" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorFilled" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2B78CA" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2B78CA" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorAdmission" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A8D3FE" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#A8D3FE" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="students" stroke="#f59e0b" strokeWidth={2} fill="url(#colorStudents)" />
          <Area type="monotone" dataKey="filled" stroke="#2563eb" strokeWidth={2} fill="url(#colorFilled)" />
          <Area type="monotone" dataKey="admission" stroke="#93c5fd" strokeWidth={2} fill="url(#colorAdmission)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdmissionChart;

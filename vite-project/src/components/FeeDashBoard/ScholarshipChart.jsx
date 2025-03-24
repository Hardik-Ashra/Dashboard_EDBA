import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import  {CalendarButton}  from "../ui/CalendarButton.jsx";
const data = [
    { day: "Mon", students: 70000 },
    { day: "Tue", students: 73000 },
    { day: "Wed", students: 78000 },
    { day: "Sat", students: 79000 },
    { day: "Sun", students: 81000 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 shadow-md rounded-md text-[0.8rem] border border-gray-300">
                <p className="font-semibold">{payload[0].payload.day}</p>
                <p>{`Students: ${payload[0].payload.students}`}</p>
            </div>
        );
    }
    return null;
};

const ScholarshipChart = () => {
  
    return (
        <div className="p-4 ">
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Number Of Students Availing Scholarship</h2>
                 <CalendarButton Text="Daily"/>
                </div>
                <div className="text-3xl font-bold">10,580 <span className="text-green-500 text-sm">+32.40%</span></div>
            </div>
            <ResponsiveContainer height={350}>
                <BarChart data={data} barSize={30} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="10  10" vertical={false} stroke="#e5e7eb" horizontal={true} />
                    <XAxis dataKey="day" axisLine={false} fontSize={12} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                    <Bar dataKey="students" fill="#a8d3ff" radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ScholarshipChart;

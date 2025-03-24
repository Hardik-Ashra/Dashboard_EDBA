import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Area
} from "recharts";
import { CalendarButton } from "../ui/CalendarButton.jsx";

const data = [
    { day: "Mon", value: 73000 },
    { day: "Tue", value: 50000 },
    { day: "Wed", value: 80000 },
    { day: "Thu", value: 55000 },
    { day: "Fri", value: 85000 },
    { day: "Sat", value: 95000 },
    { day: "Sun", value: 60000 },
];

const AnnualFeeChart = () => {
    return (
        <div className="p-4 ">
            {/* Header Section */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Annual Fee Increase % Over the Year</h2>
                    <CalendarButton Text="Daily" />
                </div>
                <div className="text-3xl font-bold">10,884 </div>
            </div>

        
            <ResponsiveContainer height={330}>
                <LineChart data={data}>
                  
                    <XAxis 
                        dataKey="day" 
                        tick={{ fill: "#6B7280", fontSize: 14  }} 
                        axisLine={false} 
                        tickLine={false} 
                         dx={10}
                    />
                    <YAxis 
                        tickFormatter={(value) => `$${value / 1000}k`} 
                        tick={{ fill: "#6B7280", fontSize: 14 }} 
                        axisLine={false} 
                        tickLine={false} 
                        tickMargin={15}  
                        interval={0}  
                    />
                    <Tooltip 
                        formatter={(value) => `$${value.toLocaleString()}`} 
                        cursor={{ stroke: '#2563EB', strokeWidth: 1 }} 
                    />
                    <CartesianGrid strokeDasharray="3 3" stroke="#D1D5DB" vertical={false} />
                    <Line
                        type="linear"
                        dataKey="value"
                        stroke="#4b8ab6"
                        strokeWidth={3}
                        dot={{ fill: "white", stroke: "#2177d2", strokeWidth: 3, r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AnnualFeeChart;

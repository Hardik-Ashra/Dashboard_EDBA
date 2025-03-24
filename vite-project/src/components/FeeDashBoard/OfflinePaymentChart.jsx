import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { CalendarButton } from "../ui/CalendarButton.jsx";
import React from "react";

const data = [
    { name: "Cash", value: 55 },
    { name: "Cheque", value: 30 },
    { name: "DD", value: 25 }
];

const COLORS = ["#ff9100", "#86baf1", "#2b78ca"];

export default function OfflinePaymentsChart() {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Offline Payments</h2>
                <div className="relative">
                    <CalendarButton Text="2024-2025" />
                </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-4">
                <ResponsiveContainer height={400}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="60%"
                            innerRadius={55}
                            outerRadius={100}
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={4}
                            cornerRadius={6}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={entry.name} // Unique key added
                                    fill={COLORS[index]}
                                    stroke="white"
                                    strokeWidth={2}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="mr-20 mt-10">
                    <div>
                        <p className="text-gray-800 mb-1">Total Students</p>
                        <p className="text-4xl font-bold text-gray-900">10,587</p>
                    </div>
                    <div className="mt-16">
                        {data.map((item, index) => (
                            <div key={item.name}> {/* Unique key added */}
                                <div className="flex justify-between items-center mb-2 gap-20">
                                    <div className="flex items-center">
                                        <span
                                            className="w-3 h-3 rounded"
                                            style={{ backgroundColor: COLORS[index] }}
                                        ></span>
                                        <p className="text-gray-600 ml-2">{item.name}</p>
                                    </div>
                                    <span
                                        className="border-2 px-3 rounded-full font-semibold"
                                        style={{ borderColor: COLORS[index] }}
                                    >
                                        {item.value}%
                                    </span>
                                </div>
                                <hr className="my-5 text-gray-200" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

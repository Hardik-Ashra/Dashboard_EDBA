import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const data = [
  { category: "Merit", value: 12000 },
  { category: "Direct", value: 9000 },
  { category: "In-house", value: 6000 },
  { category: "Management Quota", value: 9000 },
  { category: "Reservation Quota", value: 6000 },
  { category: "CAP", value: 9000 },
];

const AdmissionCriteriaChart = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Admission Criteria</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <PolarRadiusAxis domain={[0, 12000]} tickCount={5} tick={{ fill: "#4a5565" }} />
          <Radar name="Admission" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdmissionCriteriaChart;

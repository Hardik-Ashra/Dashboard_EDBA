import { PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';
import  {CalendarButton}  from "../ui/CalendarButton.jsx";

const data = [
  { name: 'Total', value: (90+ 36 + 46), color: '#2b78ca' },
  { name: 'Completed', value: 90, color: '#86baf1' },
  { name: 'Delayed', value: 36, color: '#fe9000' },
  { name: 'Ongoing', value: 46, color: '#fcd8ac' },

];

const FeeStructureChart = () => {

  
  return (
    <div className="p-4 ">
        <div className="mb-20">
                        <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Fee Structure Breakdown</h2>
                            <CalendarButton Text="Daily" />
                        </div>
                       
                    </div>
    
      <div className="flex justify-center relative ">
      <PieChart width={250} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={100}
            outerRadius={120}
            paddingAngle={3}
            cornerRadius={10}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute inset-0.5 flex flex-col items-center justify-center text-2xl font-bold text-gray-800">
          <span>72%</span>
          <span className="text-sm text-gray-500">Completed</span>
        </div>
      </div >
      <div className="mt-4 block md:flex justify-around text-center text-sm">
        <div >
          <span className="text-lg text-[#2b78ca] font-bold">124</span><br />Total Projects
        </div>
        <div >
          <span className="text-lg text-[#fe9000] font-bold">26</span><br />Completed
        </div>
        <div >
          <span className="text-lg text-[#86baf1] font-bold">36</span><br />Delayed
        </div>
        <div>
          <span className="text-lg text-[#fcd8ac] font-bold">46</span><br />Ongoing
        </div>
      </div>
    </div>
  );
};

export default FeeStructureChart;


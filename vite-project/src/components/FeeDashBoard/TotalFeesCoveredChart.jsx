import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import  {CalendarButton}  from "../ui/CalendarButton.jsx";

const data = [
  { name: "Employee Salary", value: 45 },
  { name: "Office Expense", value: 58 },
  { name: "Investment", value: 32 },
];

const COLORS = ["#ff9100", "#86baf1", "#2b78ca"];

export default function TotalFeesCovered() {

  return (
    <div className="p-4">
     
      
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Total Fees Covered <br />By Scholarships
          </h2>
           <CalendarButton Text="February,2025"/>
        </div>
     
      <div className="text-3xl font-bold">10,080<span className="text-green-500 text-sm font-medium"> <span className="text-lg">▲</span> +32.40%</span></div>
      <div className="flex flex-col items-center mt-6">
        <ResponsiveContainer height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              paddingAngle={4}
              cornerRadius={6}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="white" strokeWidth={3} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="mt-6 w-full flex flex-wrap-reverse justify-between gap-4">
          {data.map((entry, index) => (
            <div key={index} className="flex justify-between items-center mb-2 gap-4">
              <div className="flex items-center">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                ></span>
                <p className="text-gray-600 ml-2">{entry.name}</p>
              </div>
              <span className="border-2 px-3 py-0.5 rounded-full font-semibold text-sm" style={{ borderColor: COLORS[index] }}>
                {entry.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
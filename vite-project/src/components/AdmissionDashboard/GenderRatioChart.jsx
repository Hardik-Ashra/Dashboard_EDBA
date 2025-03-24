import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


const data = [
  { name: "Male", value: 55 },
  { name: "Female", value: 45 }
];

const COLORS = ["#2B78CA", "#FE9002"];

export default function GenderRatioChart() {


  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-900">Gender Ratio</h2>
      <div className="w-full flex flex-col sm:flex-row">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={110}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              paddingAngle={4}
              cornerRadius={6}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  stroke="white"
                  strokeWidth={0} // Improved separation
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="mr-20">
          <div>
            <p className="text-gray-800 mb-1">Total Students</p>
            <p className="text-4xl font-bold text-gray-900">10,587</p>
          </div>
          <div className="mt-20">
            <div className="flex justify-between items-center mb-2 gap-2">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-[#2B78CA] rounded"></span>
                <p className="text-gray-600 ml-2">Male</p>
              </div>
              <span className="border-2 border-[#2B78CA] px-3 rounded-full font-semibold">55%</span>
            </div>
            <hr className="my-5 text-gray-200" />
            <div className="flex justify-between items-center gap-18">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-[#FE9002] rounded"></span>
                <p className="text-gray-600 ml-2">Female</p>
              </div>
              <span className="border-2 border-[#FE9002] px-3 rounded-full font-semibold">45%</span>
            </div>
            <hr className="my-5 text-gray-200" />
          </div>
        </div>
      </div>


    </div>
  );
}

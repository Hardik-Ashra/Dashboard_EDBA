import React from "react";

const data = [
  { name: "Ryan International School", value: 17000 },
  { name: "Viva College & School", value: 21000 },
  { name: "National English High School", value: 17000 },
  { name: "St. Xavier’s High School", value: 8000 },
  { name: "Mother Mary’s English High School", value: 8000 },
  { name: "Mother Mary’s English High School", value: 8000 },
  { name: "Mother Mary’s English High School", value: 8000 },
  { name: "Mother Mary’s English High School", value: 8000 },
 
];

const maxValue = Math.max(...data.map((item) => item.value));

const SchoolChart = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">School Wise</h2>
      <h1 className="text-3xl mt-6 mb-8 font-bold">
        75,045k <span className="text-blue-300 text-[1rem] font-medium">32.40%</span>
      </h1>

      <div className="mt-6 w-full space-y-4 mr-2 h-[380px] overflow-auto">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col w-full   gap-3">
            <span className="text-md font-medium text-gray-700 mb-1">
              {item.name}
            </span>
            <div className="relative flex items-center w-full">
              <div
                className="bg-[#FCD8AC] h-5 rounded-lg"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              ></div>
              <span className="text-sm font-medium text-gray-700 ml-3">
                {(item.value / 1000).toFixed(0)}K
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolChart;

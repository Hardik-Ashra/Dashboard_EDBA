import React from "react";

const AdmissionTarget = () => {
  const data = [
    { name: "Viva Institute of Technology", actual: 108, target: 350 },
    { name: "Viva School of Architecture", actual: 413, target: 580 },
    { name: "Viva School & Junior College", actual: 893, target: 1250 },
    { name: "Viva College of Arts, Science & Commerce", actual: 893, target: 1250 },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between mb-5">
        <h2 className="text-xl font-semibold">Admission Target VS Actual</h2>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">
            7,590
            <span className="text-gray-500 text-[1rem]"> out of </span>10,000
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Main progress bar */}
        <div className="relative w-full bg-gray-200 rounded-md h-10 overflow-hidden">
          <div className="bg-[#a8d3ff] h-10 rounded-md" style={{ width: "75.9%" }}></div>

          {/* Major and Minor Tick Marks */}
          <div className="absolute bottom-0 left-0 w-full flex">
            {[...Array(101)].map((_, i) => (
              <div key={i} className="relative" style={{ width: "1%" }}>
                <div
                  className={`absolute bottom-0 border-r border-gray-800 ${i % 10 === 0 ? "h-5" : i % 5 === 0 ? "h-4" : "h-2"
                    }`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Labels aligned with major ticks */}
        <div className="absolute top-full left-0 w-full flex">
          {[...Array(11)].map((_, i) => (
            <div
              key={i}
              className="absolute text-xs text-gray-600 font-medium"
              style={{ left: `${i * 10}%`, transform: "translateX(-50%)" }}
            >
              {i}K
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bars */}
      <div className="flex flex-col mt-16 gap-4">
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{item.name}</span>
              <span className="text-sm font-medium">
                {item.actual} / <span className="font-normal">{item.target}</span>
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 relative">
              <div
                className="bg-[#a8d3ff] h-2 rounded-full"
                style={{ width: `${(item.actual / item.target) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionTarget;

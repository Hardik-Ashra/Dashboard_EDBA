
import { BarChart, Bar, Tooltip, ResponsiveContainer, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  { name: "Marathi", barValue: 5000, color: "#fcd8aa" },
  { name: "Gujarati", barValue: 4500, color: "#a6d4fd" },
  { name: "Bengali", barValue: 6000, color: "#fe9200" },
  { name: "Punjabi", barValue: 5500, color: "#719ccc" },
  { name: "Tamil", barValue: 4800, color: "#d9c2aa" },
  { name: "Telugu", barValue: 7000, color: "#9daac1" },
  { name: "Kannada", barValue: 5200, color: "#faa640" },
  { name: "Malayali", barValue: 3700, color: "#5297d9" },
  { name: "Rajasthani", barValue: 6800, color: "#bc6911" },
  { name: "Bihari", barValue: 5300, color: "#9dabbf" },
  { name: "Odia", barValue: 2900, color: "#d68620" },
  { name: "Assamese", barValue: 6400, color: "#86baf1" },
];

const SubCasteChart = () => (
  <div className="w-full p-4 ">
    <h2 className="text-lg font-semibold mb-8">SubCaste Wise Classification</h2>
    <ResponsiveContainer height={380}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
        <CartesianGrid vertical={false} horizontal={true} stroke="#ddd" strokeDasharray="6 6" />
        <XAxis dataKey="name" tick={{ fill: "#555", fontSize: 12 }} axisLine={false}  tickLine={false} interval={0} />
        <YAxis tick={{ fill: "#555", fontSize: 12 }} tickLine={false} axisLine={false}  domain={[0, "auto"]} />
        <Tooltip cursor={{ fill: "transparent" }} />

        <Bar dataKey="barValue" barSize={30} radius={[0, 0, 5, 5]}>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
   
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default SubCasteChart;

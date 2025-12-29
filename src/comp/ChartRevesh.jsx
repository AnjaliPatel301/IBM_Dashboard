import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { IoIosArrowDown } from "react-icons/io";

const data = [
  { name: "Dec 10", value: 92, remaining: 8 },
  { name: "Dec 11", value: 48, remaining: 52 },
  { name: "Dec 12", value: 72, remaining: 28 },
  { name: "Dec 13", value: 35, remaining: 65 },
  { name: "Dec 14", value: 88, remaining: 12 },
  { name: "Dec 15", value: 55, remaining: 45 },
  { name: "Dec 16", value: 90, remaining: 10 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl  p-4 md:p-5">
      <div className="flex items-center justify-between mb-3 md:mb-4 text-xs sm:text-sm">
        <h3 className=" font-semibold text-gray-800">Revenue Trend</h3>

        <button className="text-[11px] sm:text-xs text-gray-500 flex items-center gap-1">
          Last 7 Days
          <IoIosArrowDown className="text-sm" />
        </button>
      </div>

      <div className=" h-[150px] md:h-[250px] max-h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={20}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[20, 40, 60, 80, 100]}
              tickFormatter={(v) => `${v}k`}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A6A8B1", fontSize: 11 }}
            />

            <Bar
              dataKey="value"
              stackId="a"
              fill="#4F6EF7"
              radius={[10, 10, 10, 10]}
              barSize={10}
            />

            <Bar
              dataKey="remaining"
              stackId="a"
              fill="#E5E7EB"
              radius={[10, 10, 10, 10]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

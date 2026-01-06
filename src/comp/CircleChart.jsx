import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Professional", value: 40 },
  { name: "Enterprise", value: 23 },
  { name: "Trial", value: 20 },
  { name: "Starter", value: 17 },
];

const COLORS = ["#22c55e", "#fbbf24", "#38bdf8", "#4f46e5"];

export function PlanChart() {
  return (
    <div className="p-4 w-auto md:p-5 rounded-xl bg-white shadow-sm">
      <h3 className="text-[14px] md:text-md font-semibold mb-3 md:mb-4 text-[#243465]">
        Plan Distribution
      </h3>

      <div className="h-[180px] w-1/2 md:w-auto  md:h-[220px] lg:h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              innerRadius={50}
              outerRadius={80}
              dataKey="value"
              paddingAngle={2}
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-3 sm:mt-4 text-[11px] sm:text-xs">
        {pieData.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[i] }}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

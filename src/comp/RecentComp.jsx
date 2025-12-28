import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const companiesData = [
  { id: 1, name: "Techcrop Solution", plan: "Enterprise", interns: 250, status: "Active", date: "Nov 12, 2024" },
  { id: 2, name: "Digital Startup Inc", plan: "Starter", interns: 27, status: "Active", date: "Oct 23, 2024" },
  { id: 3, name: "GrowthTech Partners", plan: "Professional", interns: 200, status: "Reviewing", date: "Dec 12, 2024" },
  { id: 4, name: "NextWave Pvt Ltd", plan: "Starter", interns: 42, status: "Active", date: "Dec 01, 2024" },
  { id: 5, name: "Innovate Labs", plan: "Enterprise", interns: 320, status: "Active", date: "Nov 28, 2024" },
  { id: 6, name: "CodeCraft", plan: "Professional", interns: 180, status: "Reviewing", date: "Dec 18, 2024" },
  { id: 7, name: "CloudNova", plan: "Starter", interns: 35, status: "Active", date: "Dec 05, 2024" },
  { id: 8, name: "Alpha Systems", plan: "Enterprise", interns: 410, status: "Active", date: "Nov 15, 2024" },
  { id: 9, name: "Bright Minds", plan: "Professional", interns: 95, status: "Reviewing", date: "Dec 10, 2024" },
  { id: 10, name: "FutureTech", plan: "Starter", interns: 22, status: "Active", date: "Dec 22, 2024" },
];

const ITEMS_PER_PAGE = 3;
const TOTAL_PAGES = 10;

export default function RecentCompanies() {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentData = companiesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="rounded-xl font-[poppins] shadow-sm p-4 sm:p-5 mt-6 bg-white">
      
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
        <h3 className="text-sm font-semibold text-gray-800">
          Recent Companies
        </h3>
        <button className="text-xs flex items-center text-[#155DFC] hover:underline">
          <span>View All</span>
          <span className="ps-2"><IoIosArrowDown /></span>
        </button>
      </div>

            <div className="overflow-x-auto border rounded-lg">
        <table className="w-full min-w-[700px] text-xs sm:text-sm">
          <thead className="text-gray-400 border-b">
            <tr>
              <th className="py-2 ps-6 text-left">Company Name</th>
              <th className="py-2 text-left">Plan</th>
              <th className="py-2 text-left">Interns</th>
              <th className="py-2 text-left">Status</th>
              <th className="py-2 text-left">Joined Date</th>
              <th className="py-2 pe-6 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((item, i) => (
              <tr key={i} className="border-b last:border-none">
                
                                <td className="py-3 ps-6 flex items-center gap-3 min-w-[220px]">
                  <span className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center text-xs font-semibold">
                    {item.name.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="whitespace-nowrap">{item.name}</span>
                </td>

                <td className="py-3 whitespace-nowrap">{item.plan}</td>
                <td className="py-3">{item.interns}</td>

                                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="py-3 whitespace-nowrap">{item.date}</td>

                <td className="py-3 pe-6 text-right text-blue-600 cursor-pointer whitespace-nowrap">
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between 
                      border font-[inter] text-[#344054] text-xs sm:text-sm 
                      pt-[12px] pb-[18px] px-[20px] items-center bg-white mt-2">

        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="border border-[#FFA138] px-3 py-2 rounded-[8px] disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {page} of {TOTAL_PAGES}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, TOTAL_PAGES))}
          disabled={page === TOTAL_PAGES}
          className="border px-3 py-2 border-[#FFA138] rounded-[8px] disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

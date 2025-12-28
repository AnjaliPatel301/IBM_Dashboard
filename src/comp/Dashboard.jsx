import React from "react";
import { Bell, Search } from "lucide-react";
import { Users, Check } from "lucide-react";
import { FaDollarSign } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import BusinessIcon from "@mui/icons-material/Business";
import { PlanChart } from "./CircleChart";
import RevenueChart from "./ChartRevesh";
import RecentCompanies from "./RecentComp";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen font-[Poppins] bg-gray-50">
        
        <div className="flex flex-col lg:flex-row border-b justify-between items-start lg:items-center py-2 px-4 mb-6 gap-4">
          
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Welcome back, Sarah. Here's what's happening today.
            </p>
          </div>

          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 py-[12px] px-[10px] sm:px-[20px] lg:px-[40px] w-full lg:w-auto">
            
            
            <div className="relative w-full sm:w-[400px] lg:w-[603px] h-[48px] flex">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search Companies, plans..."
                className="pl-10 pr-4 py-2 w-full rounded-[10px] border text-sm focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <Bell className="text-gray-500" />
              <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                SI
              </div>
            </div>
          </div>
        </div>

        
        <div className="px-4 lg:ps-4 lg:pe-14">
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {[
              { label: "Total Companies", value: "247", Icon: BusinessIcon, bg: "bg-blue-100", color: "text-blue-500" },
              { label: "Active Interns", value: "3,842", Icon: Users, bg: "bg-yellow-100", color: "text-yellow-500" },
              { label: "Monthly Revenue", value: "$8.4l", Icon: FaDollarSign, bg: "bg-purple-100", color: "text-purple-500" },
              { label: "Active Subscription", value: "189", Icon: Check, bg: "bg-green-100", color: "text-green-500" },
              { label: "Pending Payments", value: "16", Icon: MdOutlinePendingActions, bg: "bg-yellow-100", color: "text-yellow-500" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm font-[Inter]">
                <div className={`w-8 h-10 flex items-center justify-center rounded-lg p-2 ${item.bg} mb-3`}>
                  <item.Icon className={`text-[20px] ${item.color}`} />
                </div>

                <p className="text-[13px] sm:text-[14px] text-gray-500">
                  {item.label}
                </p>
                <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-800 mt-1">
                  {item.value}
                </h2>
              </div>
            ))}
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-xl shadow-sm">
              <RevenueChart />
            </div>
            <PlanChart />
          </div>

          
          <div className="mt-6">
            <RecentCompanies />
          </div>

        </div>
      </div>
    </>
  );
}

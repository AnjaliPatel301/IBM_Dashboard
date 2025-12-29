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
      <div className="min-h-screen font-[Poppins] bg-gray-50 ">
        <div className="flex flex-col lg:flex-row border-b justify-between items-start lg:items-center py-3 px-4  gap-4">
          <div>
            <h1 className="text-lg sm:text-md font-semibold text-gray-800">
              Dashboard
            </h1>
            <p className="text-md  text-gray-500">
              Welcome back, Sarah. Here's what's happening today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4  w-full lg:w-auto">
            <div className="relative w-full sm:w-[400px] lg:w-[603px] h-[48px] flex rounded-md border text-sm items-center justify-center gap-1">
              <Search className=" text-gray-400 ml-2" size={18} />

              <input
                type="text"
                placeholder="Search Companies, plans..."
                className=" py-2 w-full  bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <Bell className="text-gray-500 size-3.5 md:size-5" />
              <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                SI
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 md:ps-4 lg:pe-14 space-y-3.5 mt-3.5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 ">
            {[
              {
                label: "Total Companies",
                value: "247",
                Icon: BusinessIcon,
                bg: "bg-blue-100",
                color: "text-blue-500",
              },
              {
                label: "Active Interns",
                value: "3,842",
                Icon: Users,
                bg: "bg-yellow-100",
                color: "text-yellow-500",
              },
              {
                label: "Monthly Revenue",
                value: "$8.4l",
                Icon: FaDollarSign,
                bg: "bg-purple-100",
                color: "text-purple-500",
              },
              {
                label: "Active Subscription",
                value: "189",
                Icon: Check,
                bg: "bg-green-100",
                color: "text-green-500",
              },
              {
                label: "Pending Payments",
                value: "16",
                Icon: MdOutlinePendingActions,
                bg: "bg-yellow-100",
                color: "text-yellow-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow-sm font-[Inter]"
              >
                <div
                  className={`size-10 flex items-center justify-center rounded-lg p-2 ${item.bg} mb-3`}
                >
                  <item.Icon className={`text-lg ${item.color}`} />
                </div>

                <p className="text-sm md:text-md text-gray-500">{item.label}</p>
                <h2 className="text-md sm:text-lg font-semibold text-gray-800 mt-1">
                  {item.value}
                </h2>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 ">
            <div className="md:col-span-2 bg-white rounded-xl shadow-sm">
              <RevenueChart />
            </div>
            <PlanChart />
          </div>

          <RecentCompanies />
        </div>
      </div>
    </>
    
  );
}

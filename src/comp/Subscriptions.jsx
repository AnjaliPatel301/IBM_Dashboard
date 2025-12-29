import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { CiRepeat } from "react-icons/ci";
import { MdAutorenew } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";
const tableData = [
  {
    company: "Techcrop Solution",
    email: "contact@techcorp.com",
    plan: "Premium Plan",
    price: "₹2,999",
    cycle: "Monthly",
    interns: 150,
    status: "Active",
    date: "Nov 12, 2024",
    initials: "TC",
  },
  {
    company: "Digital Startup Inc",
    email: "hello@digitalstudios.com",
    plan: "Premium Plan",
    price: "₹2,999",
    cycle: "Monthly",
    interns: 150,
    status: "Active",
    date: "Oct 23, 2024",
    initials: "DS",
  },
  {
    company: "GrowthTech Partners",
    email: "info@globalinnovations.com",
    plan: "Premium Plan",
    price: "₹2,999",
    cycle: "Monthly",
    interns: 150,
    status: "Expired",
    date: "Dec 12, 2024",
    initials: "GT",
  },
  {
    company: "GrowthTech Partners",
    email: "info@globalinnovations.com",
    plan: "Premium Plan",
    price: "₹2,999",
    cycle: "Monthly",
    interns: 150,
    status: "Pending",
    date: "Oct 23, 2024",
    initials: "GT",
  },
  {
    company: "GrowthTech Partners",
    email: "info@globalinnovations.com",
    plan: "Premium Plan",
    price: "₹2,999",
    cycle: "Monthly",
    interns: 150,
    status: "Active",
    date: "Oct 23, 2024",
    initials: "GT",
  },
  {
    company: "GrowthTech Partners",
    email: "info@globalinnovations.com",
    plan: "Premium Plan",
    price: "₹2,999",
    cycle: "Monthly",
    interns: 150,
    status: "Active",
    date: "Oct 23, 2024",
    initials: "GT",
  },
];

const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Expired: "bg-red-100 text-red-600",
  Pending: "bg-orange-100 text-orange-600",
};

export default function Subscriptions() {
  const [page, setPage] = useState(1);
  const perPage = 4;

  const totalPages = Math.ceil(tableData.length / perPage);
  const start = (page - 1) * perPage;
  const currentData = tableData.slice(start, start + perPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
     
      <div className="flex flex-col lg:flex-row border-b justify-between items-start lg:items-center py-2 px-4 mb-1 gap-4">

        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-[#1F2A5B]">
            Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#1F2A5B]">
            Welcome back, Sarah. Here's what's happening today.
          </p>
        </div>
         <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 py-[12px] px-[10px] sm:px-[20px] lg:px-[40px] w-full lg:w-auto">
    

          <div className="flex items-center gap-4">
            <Bell className="text-gray-500" />
            <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
              SI
            </div>
          </div>
        </div>
</div>

      {/* TABLE */}
      <div className="p-4 md:p-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-sm text-gray-500">
                <tr>
                  <th className="p-4">Company Name</th>
                  <th className="p-4">Plans Name</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Billing Cycle</th>
                  <th className="p-4">Interns Limit</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Next Billing Date</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {currentData.map((item, i) => (
                  <tr key={i}>
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-9 h-9 bg-orange-400 text-white rounded-full flex items-center justify-center">
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-medium">{item.company}</p>
                        <p className="text-sm text-gray-500">{item.email}</p>
                      </div>
                    </td>
                    <td className="p-4">{item.plan}</td>
                    <td className="p-4 font-medium">{item.price}</td>
                    <td className="p-4">{item.cycle}</td>
                    <td className="p-4">{item.interns}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${statusStyles[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex justify-between items-center p-4 border-t">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="border border-orange-500  px-4 py-1 rounded disabled:opacity-40"
            >
              Previous
            </button>

            <p className="text-sm text-gray-500">
              Page {page} of {totalPages}
            </p>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="border border-orange-500  px-4 py-1 rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 items-center flex gap-2 text-white px-4 py-1 rounded">
            <MdAutorenew/> Renew Plan
          </button>
          <button className="bg-blue-600 items-center flex gap-2 text-white px-4   py-1 rounded">
            <MdChangeCircle className=""/> Change Plan
          </button>
        </div>
      </div>
    </div>
  );
}

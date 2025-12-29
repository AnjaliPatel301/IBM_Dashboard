import React from 'react'
import { useState } from "react";

import { Bell, Search } from "lucide-react";

const data = [
  {
    company: "Techcrop Solution",
    email: "contact@techcorp.com",
    invoice: "INV-1023",
    amount: "₹2,999",
    mode: "UPI",
    status: "Paid",
    date: "Nov 12, 2024",
    initials: "TC",
  },
  {
    company: "Digital Startup Inc",
    email: "hello@digitalstudios.com",
    invoice: "INV-1024",
    amount: "₹2,999",
    mode: "UPI",
    status: "Paid",
    date: "Oct 23, 2024",
    initials: "DS",
  },
  {
    company: "GrowthTech Partners",
    email: "info@globalinnovations.com",
    invoice: "INV-1025",
    amount: "₹2,999",
    mode: "Net",
    status: "Failed",
    date: "Dec 12, 2024",
    initials: "GT",
  },
    {
    company: "Techcrop Solution",
    email: "contact@techcorp.com",
    invoice: "INV-1023",
    amount: "₹2,999",
    mode: "UPI",
    status: "Paid",
    date: "Nov 12, 2024",
    initials: "TC",
  },
  {
    company: "Digital Startup Inc",
    email: "hello@digitalstudios.com",
    invoice: "INV-1024",
    amount: "₹2,999",
    mode: "UPI",
    status: "Paid",
    date: "Oct 23, 2024",
    initials: "DS",
  },
  {
    company: "GrowthTech Partners",
    email: "info@globalinnovations.com",
    invoice: "INV-1025",
    amount: "₹2,999",
    mode: "Net",
    status: "Failed",
    date: "Dec 12, 2024",
    initials: "GT",
  },
  {
    company: "Digital Startup Inc",
    email: "hello@digitalstudios.com",
    invoice: "INV-1024",
    amount: "₹2,999",
    mode: "UPI",
    status: "Paid",
    date: "Oct 23, 2024",
    initials: "DS",
  },
  {
    company: "GrowthTech Partners",
    email: "info@globalinnovations.com",
    invoice: "INV-1025",
    amount: "₹2,999",
    mode: "Net",
    status: "Failed",
    date: "Dec 12, 2024",
    initials: "GT",
  },
];

const statusStyle = {
  Paid: "bg-green-100 text-green-700",
  Failed: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-700",
};
const Payment_history = () => {
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;
const lastIndex = currentPage * itemsPerPage;
const firstIndex = lastIndex - itemsPerPage;
const currentData = data.slice(firstIndex, lastIndex);
const totalPages = Math.ceil(data.length / itemsPerPage);

const handleNext = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};

const handlePrev = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

// ek page me kitne rows chahiye

  return (
        <div className="min-h-screen font-[Poppins] bg-gray-50">

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
<div className="p-4 md:p-6">
        <div className="bg-white rounded-lg shadow">
          {/* DESKTOP TABLE */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-500 text-sm">
                <tr>
                  <th className="p-4">Company Name</th>
                  <th className="p-4">Invoice ID</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Payment Mode</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Invoice</th>
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
                    <td className="p-4">{item.invoice}</td>
                    <td className="p-4 font-medium">{item.amount}</td>
                    <td className="p-4">{item.mode}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${statusStyle[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4">{item.date}</td>
                    <td className="p-4 cursor-pointer">👁</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARDS */}
          <div className="md:hidden divide-y">
            {data.map((item, i) => (
              <div key={i} className="p-4 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-orange-400 text-white rounded-full flex items-center justify-center">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-medium">{item.company}</p>
                    <p className="text-sm text-gray-500">{item.email}</p>
                  </div>
                </div>
                <p><b>Invoice:</b> {item.invoice}</p>
                <p><b>Amount:</b> {item.amount}</p>
                <p><b>Mode:</b> {item.mode}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm ${statusStyle[item.status]}`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-between items-center p-4 border-t">
  <button
    onClick={handlePrev}
    disabled={currentPage === 1}
    className="border border-orange-400  px-4 py-1 rounded disabled:opacity-40"
  >
    Previous
  </button>

  <p className="text-sm text-gray-500">
    Page {currentPage} of {totalPages}
  </p>

  <button
    onClick={handleNext}
    disabled={currentPage === totalPages}
    className="border border-orange-400 px-4 py-1 rounded disabled:opacity-40"
  >
    Next
  </button>
</div>

          </div>
            </div>
</div>
  )
}

export default Payment_history
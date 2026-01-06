import { PiSquaresFourThin } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { GiAbacus } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import logo from "../assets/b.png";
import { FiSettings } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { Building2, Columns3Cog, PanelTop } from "lucide-react";
import { MdOutlineSubscriptions } from "react-icons/md";
import BusinessIcon from "@mui/icons-material/Business";
import PieChartIcon from "@mui/icons-material/PieChart";

const Sidebar = ({ active, setActive, sidebarOpen, setSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const menu = [
    {
      name: "Dashboard",
      icon: PiSquaresFourThin,
    },
    {
      name: "Companies",
      icon: BusinessIcon,
    },
    {
      name: "Plans Management",
      icon: Columns3Cog,
    },
    {
      name: "Platform Analytics",
      icon: PieChartIcon,
    },
    {
      name: "Payment History",
      icon: PanelTop,
    },
    {
      name: "Subscriptions",
      icon: MdOutlineSubscriptions,
    },
  ];
  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed font-[Poppins] inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
    fixed md:sticky  top-0 left-0 z-50
    min-h-screen w-[240px] 
    bg-black text-white
    transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
    flex flex-col
  `}
      >
        <div className="h-[80px]  px-5 font-[Poppins] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" />
          </div>

          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <IoClose size={22} />
          </button>
        </div>

        <nav className="flex-1 font-[Poppins] px-4 pt-2 space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActive(item.name);
                  setSidebarOpen(false);
                }}
                className={`
                  flex items-center gap-3 w-full h-[44px] px-4 rounded
                  hover:bg-[#F6901C]  transition
                  ${active === item.name ? "bg-[#F6901C]" : ""}
                `}
              >
                <Icon size={18} />
                <span className="text-sm">{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div class="p-4 border-t font-[Poppins] border-white/10">
          <a
            href="#"
            class="flex items-center  rounded w-[204px] h-[44px] px-[16px] py-14px hover:bg-[#F6901C]"
          >
            <FiSettings className="h-[18px] w-[18px] " />
            <p className="p-2 text-[#FAFDEC] font-[poppins] font-[400] ">
              Settings
            </p>
          </a>
          <a
            href="#"
            class="flex items-center  rounded w-[204px] h-[44px] px-[16px] py-14px hover:bg-[#F6901C]"
          >
            <LuLogOut className="h-[18px] w-[18px] " />
            <p className="p-2 text-[#FAFDEC] font-[poppins] font-[400] ">
              Logout
            </p>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

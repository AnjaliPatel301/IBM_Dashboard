import { useState } from "react";
import Dashboard from "./comp/Dashboard";
import Companies from "./comp/Companies";
import Sidebar from "./comp/siderbar";
import Plat_management from "./comp/Plans_management";
import Payment_History from "./comp/Payment_history";
import Platform_Analytics from "./comp/Platform_analytics";
import Subscriptions from "./comp/Subscriptions";

function App() {
  const [active, setActive] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (active) {
      case "Companies":
        return <Companies />;
      case "Plans Management":
        return <Plat_management />;
      case "Platform Analytics":
        return <Platform_Analytics />;
      case "Payment History":
        return <Payment_History />;
      case "Subscriptions":
        return <Subscriptions />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        active={active}
        setActive={setActive}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar → mobile only */}
        <header className="lg:hidden h-[56px] border-b flex items-center px-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-2xl"
          >
            ☰
          </button>
          <h1 className="ml-4 font-semibold">{active}</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import Dashboard from "./comp/Dashboard"
import Companies from "./comp//Companies"
import Sidebar from "./comp/siderbar"
import Plat_management from './comp/Plans_management'
import Payment_History from "./comp/Payment_history"
import Platform_Analytics from "./comp/Platform_analytics"
import Subscriptions from "./comp/Subscriptions"


function App() {
   const [active, setActive] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  const renderPage = () => {
    switch (active) {
      case "Companies":
        return <Companies/>;
      case "Plans Management":
        return <Plat_management/>;
      case "Platform Analytics":
        return <Platform_Analytics />;
      case "Payment History":
        return <Payment_History/>;
      case "Subscriptions":
        return <Subscriptions />;
         
      default:
        return <Dashboard />;
    }
  };

  return (


      <div className="flex">
     
      <Sidebar
        active={active}
        setActive={setActive}
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />

      
      <div className="flex-1 min-h-screen">
       
        <div className="md:hidden p-3">
          <button onClick={() => setSidebarOpen(true)} className="text-xl">
            ☰
          </button>
        </div>
        {renderPage()}
      </div>
    </div>
   
  );
}

export default App;

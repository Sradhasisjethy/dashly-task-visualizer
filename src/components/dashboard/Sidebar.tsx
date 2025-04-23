
import { FolderKanban, PieChart, Calendar, Settings, Users, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="h-screen w-64 bg-slate-800 text-white p-5 hidden md:block">
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
          <FolderKanban className="w-5 h-5" />
        </div>
        <Link to="/" className="text-xl font-bold">TaskFlow</Link>
      </div>

      <nav>
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className={`flex items-center p-2 rounded-lg ${path === "/" || path === "/dashboard" ? "bg-slate-700 text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"}`}
            >
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/analytics" 
              className={`flex items-center p-2 rounded-lg ${path === "/analytics" ? "bg-slate-700 text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"}`}
            >
              <PieChart className="w-5 h-5 mr-3" />
              Analytics
            </Link>
          </li>
          <li>
            <Link 
              to="/calendar" 
              className={`flex items-center p-2 rounded-lg ${path === "/calendar" ? "bg-slate-700 text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"}`}
            >
              <Calendar className="w-5 h-5 mr-3" />
              Calendar
            </Link>
          </li>
          <li>
            <Link 
              to="/team" 
              className={`flex items-center p-2 rounded-lg ${path === "/team" ? "bg-slate-700 text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"}`}
            >
              <Users className="w-5 h-5 mr-3" />
              Team
            </Link>
          </li>
          <li>
            <Link 
              to="#" 
              className="flex items-center p-2 rounded-lg hover:bg-slate-700 text-gray-300 hover:text-white transition-colors"
            >
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      <div className="absolute bottom-5 w-52">
        <div className="bg-slate-700 p-4 rounded-lg">
          <p className="text-sm text-gray-300 mb-2">Need help with TaskFlow?</p>
          <button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

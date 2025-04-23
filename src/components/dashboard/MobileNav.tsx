import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-800 text-white">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">TaskFlow</Link>
        </div>
        <Button
          variant="ghost"
          className="text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-800 md:hidden">
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </Button>
          </div>
          <div className="p-4">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className={`flex items-center p-2 rounded-lg ${path === "/" || path === "/dashboard" ? "bg-slate-700 text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/analytics"
                    className={`flex items-center p-2 rounded-lg ${path === "/analytics" ? "bg-slate-700 text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/calendar"
                    className={`flex items-center p-2 rounded-lg ${path === "/calendar" ? "bg-slate-700 text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className={`flex items-center p-2 rounded-lg ${path === "/team" ? "bg-slate-700 text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center p-2 rounded-lg hover:bg-slate-700 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

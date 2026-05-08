import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Bell,
  Search,
  Settings,
  LogOut,
} from "lucide-react";
import Logo from "../assets/eduTrack2.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { UseUser } from "../hooks/useUser";


const Sidebar = ({ links }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const { data: user = {}, isLoading, isError } = UseUser();

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200/50 bg-white/95 shadow-sm backdrop-blur-lg dark:border-gray-700/50 dark:bg-gray-800/95">
        <div className="px-3 py-4 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="inline-flex items-center rounded-xl p-2.5 text-sm text-gray-500 transition-all duration-200 hover:bg-gray-100 focus:ring-2 focus:ring-blue-200 focus:outline-none sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              <a href="/" className="ml-2 flex items-center md:mr-24">
                <div className="mr-4 flex h-12 w-30 mt-3 items-center justify-center rounded-xl bg-linear-to-br shadow-lg transition-all duration-500">
                  <img
                    
                    src={Logo}
                    className="text-lg font-bold text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">
                    <span className="ml-1 text-blue-500">EduTrack</span>
                  </span>
                  <span className="-mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Education
                  </span>
                </div>
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="group flex items-center space-x-3 rounded-xl p-2 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-400 to-purple-500 text-sm font-semibold text-white shadow-lg">
                    {isLoading ? "?" : user?.first_name?.charAt(0)}
                  </div>
                  <div className="hidden text-left md:block">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {isLoading ? "Loading..." : `${user?.first_name || ""} ${user?.last_name || ""}`}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {user?.role || "User"}
                    </div>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-300 group-hover:text-gray-600 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {dropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="animate-fadeIn absolute right-0 z-50 mt-3 w-80 overflow-hidden rounded-2xl border border-gray-200/50 bg-white/95 shadow-xl backdrop-blur-lg dark:border-gray-600/50 dark:bg-gray-700/95"
                  >
                    <div className="border-b border-gray-200/50 bg-linear-to-r from-blue-50 to-purple-50 px-6 py-5 dark:border-gray-600/50 dark:from-gray-800 dark:to-gray-800">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-400 to-purple-500 font-semibold text-white shadow-lg">
                          {user?.first_name?.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">
                            {user?.first_name} {user?.last_name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {user?.email}
                          </div>
                          <div className="text-xs font-medium text-blue-600 capitalize dark:text-blue-400">
                            {user?.role} 
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-3">
                      <a
                        href="#"
                        className="group flex items-center px-6 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-600"
                      >
                        <Settings
                          size={18}
                          className="mr-3 text-gray-400 transition-colors duration-200 group-hover:text-blue-500"
                        />
                        <Link
                          to={`/admin/settings/${user?.id}`}
                          className="group-hover:text-gray-900 dark:group-hover:text-white"
                        >
                          Account Settings
                        </Link>
                      </a>
                      <div className="my-2 border-t border-gray-200/50 dark:border-gray-600/50"></div>
                      <button className="group flex w-full items-center px-6 py-3 text-sm text-red-600 transition-all duration-200 hover:bg-red-50 dark:text-red-400 dark:hover:bg-gray-600">
                        <LogOut
                          size={18}
                          className="mr-3 transition-transform duration-200 group-hover:scale-110"
                        />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-72 border-r border-gray-200/50 bg-white/95 pt-20 shadow-lg backdrop-blur-lg transition-all duration-300 dark:border-gray-700/50 dark:bg-gray-800/95 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
      >
        <div className="h-full overflow-y-auto px-4 pb-4">
          {/* Navigation Menu */}
          <div className="mt-6">{links}</div>

          {/* Enhanced Quick Stats Panel */}
        </div>
      </aside>

      {/* Enhanced Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content Area */}
      <main className="min-h-screen p-6 pt-24 sm:ml-72">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;

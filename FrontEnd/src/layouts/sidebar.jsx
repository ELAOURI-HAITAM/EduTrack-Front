import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/eduTrack2.png";
import Male from "../assets/auth/Man.png";
import Female from "../assets/auth/Woman.png";
import StudentMale from "../assets/auth/student.png";
import StudentFemale from "../assets/auth/student_female.png";
import Admin from "../assets/auth/admin.png";
import { Outlet } from "react-router-dom";
import { UseUser } from "../hooks/useUser";
import LogOut from "../features/auth/logout";
import GetNotifications from "../features/notification/getNotifications";

const Sidebar = ({ links }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const { data: user = {}, isLoading } = UseUser();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const getProfileImage = () => {
    if (
      user?.role === "Professor" &&
      user?.gender === "Male"
    ) {
      return Male;
    }

    if (
      user?.role === "Professor" &&
      user?.gender === "Female"
    ) {
      return Female;
    }

    if (
      user?.role === "Student" &&
      user?.gender === "Male"
    ) {
      return StudentMale;
    }

    if (
      user?.role === "Student" &&
      user?.gender === "Female"
    ) {
      return StudentFemale;
    }

    return Admin;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200/50 bg-white/95 shadow-sm backdrop-blur-lg dark:border-gray-700/50 dark:bg-gray-800/95">
        <div className="px-3 py-4 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">

            <div className="flex items-center">

              <button
                onClick={toggleSidebar}
                className="mr-3 inline-flex items-center rounded-xl p-2.5 text-sm text-gray-500 transition-all duration-200 hover:bg-gray-100 focus:ring-2 focus:ring-blue-200 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                {sidebarOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>

              <a
                href="/"
                className="ml-2 flex items-center md:mr-24"
              >
                <div className="mr-4 mt-3 flex h-12 w-30 items-center justify-center rounded-xl shadow-lg">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="text-lg font-bold text-white"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl font-bold">
                    <span className="ml-1 text-blue-500">
                      EduTrack
                    </span>
                  </span>

                  <span className="-mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Education - FS MEKNES
                  </span>
                </div>
              </a>
            </div>

            <div className="flex items-center space-x-4">

              {user?.role !== "Admin" && (
                <GetNotifications />
              )}

              <div className="relative">

                <button
                  onClick={toggleDropdown}
                  className="group flex items-center space-x-3 rounded-xl p-2 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-400 to-purple-500 shadow-lg">

                    <img
                    className="h-8 w-8"
                      src={getProfileImage()}
                      alt="Profile"
                    />

                  </div>

                  <div className="hidden text-left md:block">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">

                      {isLoading
                        ? "Loading..."
                        : `${user?.first_name || ""} ${user?.last_name || ""}`}

                    </div>

                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {user?.role || "User"}
                    </div>
                  </div>

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      dropdownOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {dropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 z-50 mt-3 w-80 overflow-hidden rounded-2xl border border-gray-200/50 bg-white shadow-xl dark:border-gray-600/50 dark:bg-gray-700"
                  >

                    <div className="border-b px-6 py-5">

                      <div className="flex items-center space-x-4">

                        <div className="h-12 w-12 rounded-full overflow-hidden">

                          <img
                            src={getProfileImage()}
                            alt="Profile"
                          />

                        </div>

                        <div>

                          <div className="font-semibold text-gray-900 dark:text-white">
                            {user?.first_name}{" "}
                            {user?.last_name}
                          </div>

                          <div className="text-sm text-gray-500">
                            {user?.email}
                          </div>

                          <div className="text-xs text-blue-500">
                            {user?.role}
                          </div>

                        </div>

                      </div>

                    </div>

                    <div className="my-2 "></div>

                    <LogOut />

                  </div>
                )}

              </div>

            </div>

          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-72 border-r border-gray-200/50 bg-white/95 pt-20 shadow-lg backdrop-blur-lg transition-all duration-300 dark:border-gray-700/50 dark:bg-gray-800/95 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        <div className="h-full overflow-y-auto px-4 pb-4">

          <div className="mt-6">
            {links}
          </div>

        </div>

      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 sm:hidden"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

      <main
        className={`min-h-screen p-6 pt-24 transition-all duration-300 ${
          sidebarOpen
            ? "ml-72"
            : "ml-0"
        }`}
      >
        <Outlet />
      </main>

    </div>
  );
};

export default Sidebar;
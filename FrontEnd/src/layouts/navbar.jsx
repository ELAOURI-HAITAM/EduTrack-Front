import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/eduTrack1.png";
import MainButton from "../components/Buttons/main_button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["home", "features", "about"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-24 items-center justify-center rounded-lg">
              <img
                src={Logo}
                alt="EduTrack Logo"
                className="object-contain"
              />
            </div>

            <span className="bg-[#437eff] bg-clip-text text-2xl font-bold text-transparent">
              EduTrack
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-700 capitalize transition-colors duration-200 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}

              <Link to="/login">
                <MainButton variant="outline" className="ml-4">
                  Login
                </MainButton>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 text-gray-700 transition hover:bg-gray-100"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-2 rounded-xl bg-white p-4 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium text-gray-700 capitalize transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}

              <Link to="/login">
                <MainButton
                  variant="outline"
                  className="mt-2 w-full"
                >
                  Login
                </MainButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
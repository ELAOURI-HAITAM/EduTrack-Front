import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/vite.svg'
import MainButton from "../components/Buttons/main_button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
              <img src={Logo}/>
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent">
              EduTrack
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["home", "features", "about" ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-700 capitalize transition-colors duration-200 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
              <Link to={"/user/login"}>
              <MainButton variant="outline" className="ml-4">
                Login
              </MainButton>
              </Link>
            </div>
          </div>

          
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-lg bg-white px-2 pt-2 pb-3 shadow-lg">
              {["home", "about", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full px-3 py-2 text-left text-base font-medium text-gray-700 capitalize hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
              <div className="px-3 py-2">
                
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

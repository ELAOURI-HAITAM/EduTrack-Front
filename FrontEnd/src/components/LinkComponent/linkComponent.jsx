import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const LinkComponent = ({ links }) => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <ul className="space-y-3 font-medium">
      {links.map((linkItem, index) => (
        <li key={index}>
          <a
            href={linkItem.path}
            onClick={() => setActiveLink(linkItem.path)}
            className={`flex items-center p-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
              activeLink === linkItem.path
                ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 hover:scale-102 hover:shadow-md'
            }`}
          >
            {activeLink === linkItem.path && (
              <div className="absolute inset-0 bg-linear-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-sm"></div>
            )}
            
            <div className={`relative z-10 text-xl transition-all duration-300 ${
              activeLink === linkItem.path 
                ? 'text-white transform scale-110' 
                : 'text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200'
            }`}>
              {linkItem.icon}
            </div>
            <span className={`relative z-10 ml-4 font-medium transition-all duration-300 ${
              activeLink === linkItem.path ? 'text-white' : ''
            }`}>
              {linkItem.title}
            </span>
            
            {activeLink === linkItem.path && (
              <div className="absolute right-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinkComponent;

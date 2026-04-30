import React, { useState, useEffect } from 'react';

const MainButton = ({name , children, variant = 'primary', full = false, onclick, className = '' }) => {
  const baseClasses = `px-6 py-3 cursor-pointer rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 ${full ? 'w-full' : ''}`;
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:ring-blue-300 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-blue-500 text-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white focus:ring-blue-300'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onclick}
    >
      {name}
      {children}
    </button>
  );
};

export default MainButton;
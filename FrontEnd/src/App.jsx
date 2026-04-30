import React from "react";
import {Route , Routes } from 'react-router-dom'
import Home from "./pages/main_pages/home";
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  AOS.init({
      duration: 1000, 
      once: false, 
      mirror : true
    });
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};

export default App;

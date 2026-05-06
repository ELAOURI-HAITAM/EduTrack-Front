import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/main_pages/home";
import AOS from "aos";
import "aos/dist/aos.css";
import AllRoutes from "./routes/routes";
const App = () => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
  });
  return <AllRoutes />;
};

export default App;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { FaChevronRight, FaChevronLeft, FaEnvelope } from "react-icons/fa";
import WhyChooseMe from "./pages/why";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const NavigationWrapper = () => {
    const navigate = useNavigate();
    const routes = ["/", "/about", "/why", "/contact"];
    const currentRouteIndex = routes.indexOf(window.location.pathname);

    const handleNext = () => {
      if (currentRouteIndex < routes.length - 1) {
        navigate(routes[currentRouteIndex + 1]);
      }
    };

    const handlePrevious = () => {
      if (currentRouteIndex > 0) {
        navigate(routes[currentRouteIndex - 1]);
      }
    };

    return (
      <div className="absolute bottom-10 flex justify-between w-full px-6">
        <button
          onClick={handlePrevious}
          disabled={currentRouteIndex === 0}
          className={`p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-800 hover:scale-105 transition-transform flex items-center justify-center ${
            currentRouteIndex === 0 && "opacity-50 cursor-not-allowed"
          }`}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          disabled={currentRouteIndex === routes.length - 1}
          className={`p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform flex items-center justify-center ${
            currentRouteIndex === routes.length - 1 &&
            "opacity-50 cursor-not-allowed"
          }`}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    );
  };

  return (
    <Router>
      <div
        className={`flex flex-col h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white `}
      >
        <div className="flex-none">
          <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        </div>

        <div className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why" element={<WhyChooseMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <NavigationWrapper />
        </div>
      </div>
    </Router>
  );
};

const NotFound = () => (
  <div className="h-full flex items-center justify-center">
    <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
  </div>
);

export default App;

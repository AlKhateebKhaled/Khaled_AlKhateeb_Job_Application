import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`sticky top-0 z-50 py-4 shadow-lg transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-900 text-white border-b border-gray-700"
          : "bg-white text-gray-800 border-b border-gray-300"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide hover:text-blue-500 transition"
          >
            Khaled's Presentation
          </Link>
        </motion.div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Why Choose Me", "Contact"].map((link) => (
            <Link
              key={link}
              to={
                link === "Home"
                  ? "/"
                  : link === "Why Choose Me"
                  ? "/why"
                  : `/${link.toLowerCase()}`
              }
              className="font-medium text-lg hover:text-blue-500 transition"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-400" size={20} />
          ) : (
            <FaMoon className="text-blue-600" size={20} />
          )}
        </button>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden ml-4 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center space-y-4 py-6 bg-gray-100 dark:bg-gray-800"
        >
          {["Home", "About", "Why Choose Me", "Contact"].map((link) => (
            <Link
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="text-lg font-medium hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

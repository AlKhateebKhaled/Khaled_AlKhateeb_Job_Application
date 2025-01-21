import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import profileImage from "../assets/profile.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center container mx-auto px-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <motion.img
          src={profileImage}
          alt="Khaled's Profile"
          className="w-60 h-60 rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-lg mr-0 md:mr-10 mb-6 md:mb-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        {/* Content Section */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Professional World
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I’m Khaled, a creative and results-driven professional passionate
            about delivering impactful solutions.
          </motion.p>
          <motion.p
            className="text-base text-gray-600 dark:text-gray-400 max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            With a focus on innovation and excellence, I’m dedicated to creating
            meaningful experiences and driving success.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

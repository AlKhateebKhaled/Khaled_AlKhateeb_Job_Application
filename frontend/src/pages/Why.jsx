import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaAward,
  FaUniversity,
} from "react-icons/fa";
import { SiCanva, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { FaPaintBrush, FaTools, FaTrello, FaMicrosoft } from "react-icons/fa";
import { FaFilePowerpoint } from "react-icons/fa";

const WhyChooseMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16">
      {/* Section: Introduction */}
      <motion.div
        className="text-center mb-16 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Why Choose Me?</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Discover the unique qualities and expertise that make me the perfect
          choice for your team or project.
        </p>
      </motion.div>

      {/* Section: Key Reasons */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 px-6">
        {[
          {
            icon: <FaLightbulb className="text-yellow-500 text-4xl mb-4" />,
            title: "Innovative Thinker",
            description:
              "I bring creative solutions and out-of-the-box ideas to every challenge.",
          },
          {
            icon: <FaChartLine className="text-blue-500 text-4xl mb-4" />,
            title: "Driven by Results",
            description:
              "My work is focused on achieving measurable success and continuous improvement.",
          },
          {
            icon: <FaUsers className="text-green-500 text-4xl mb-4" />,
            title: "Team Player",
            description:
              "Collaboration is at the core of my work ethic to ensure project success.",
          },
          {
            icon: <FaPaintBrush className="text-purple-500 text-4xl mb-4" />,
            title: "Creative Design Expertise",
            description:
              "Skilled in creating professional designs using tools like Canva, PowerPoint, and Adobe Photoshop.",
          },
          {
            icon: <FaUniversity className="text-teal-500 text-4xl mb-4" />,
            title: "Strong Coordination",
            description:
              "Collaborated with universities to deliver and set up equipment, organizing training sessions effectively.",
          },
          {
            icon: <FaAward className="text-purple-500 text-4xl mb-4" />,
            title: "Proven Track Record",
            description:
              "I have a history of delivering exceptional results on various projects.",
          },
        ].map((reason, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {reason.icon}
            <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Section: Tools I Work With */}
      <div className="container mx-auto text-center mb-16 px-6">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
          Tools I Work With
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              tool: "Canva",
              icon: <SiCanva className="text-blue-500 text-4xl mb-4" />,
            },
            {
              tool: "PowerPoint",
              icon: (
                <FaFilePowerpoint className="text-orange-500 text-4xl mb-4" />
              ),
            },
            {
              tool: "Adobe Photoshop",
              icon: (
                <SiAdobephotoshop className="text-blue-700 text-4xl mb-4" />
              ),
            },
            {
              tool: "Adobe Illustrator",
              icon: (
                <SiAdobeillustrator className="text-yellow-500 text-4xl mb-4" />
              ),
            },
            {
              tool: "Trello",
              icon: <FaTrello className="text-teal-500 text-4xl mb-4" />,
            },
            {
              tool: "Microsoft Office",
              icon: <FaMicrosoft className="text-green-500 text-4xl mb-4" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {item.icon}
              <h3 className="text-xl font-bold mb-2">{item.tool}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section: Achievements */}
      <div className="container mx-auto text-center mb-16 px-6">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
          My Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              stat: "10+",
              label: "Projects Completed",
              color: "text-blue-600",
            },
            {
              stat: "5+",
              label: "Years of Experience",
              color: "text-green-600",
            },
            {
              stat: "100%",
              label: "Client Satisfaction",
              color: "text-purple-600",
            },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3
                className={`text-4xl font-extrabold ${achievement.color} mb-2`}
              >
                {achievement.stat}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;

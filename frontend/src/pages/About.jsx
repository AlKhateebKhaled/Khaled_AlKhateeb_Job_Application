import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaLightbulb, FaChartLine, FaUsers, FaAward } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16">
      {/* Section 1: Introduction */}
      <motion.div
        className="text-center mb-16 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">About Me</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Hi, I’m Khaled, a creative problem solver with expertise in project
          coordination, research, and design. I’m dedicated to delivering
          innovative and impactful solutions that leave a lasting impression.
        </p>
      </motion.div>

      {/* Section 2: Values */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-6">
        {[
          {
            icon: <FaLightbulb className="text-yellow-500 text-4xl mb-4" />,
            title: "Innovation",
            description:
              "I focus on delivering creative and forward-thinking solutions.",
          },
          {
            icon: <FaChartLine className="text-blue-500 text-4xl mb-4" />,
            title: "Growth",
            description:
              "I’m committed to continuous learning and professional development.",
          },
          {
            icon: <FaUsers className="text-green-500 text-4xl mb-4" />,
            title: "Collaboration",
            description:
              "Teamwork is at the heart of my approach to achieving success.",
          },
          {
            icon: <FaAward className="text-purple-500 text-4xl mb-4" />,
            title: "Excellence",
            description:
              "I strive to deliver results that exceed expectations.",
          },
        ].map((value, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            {value.icon}
            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Section 3: Experience */}
      <div className="container mx-auto mb-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          My Experience
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {[
            {
              year: "2024",
              title: "Full-Stack Developer Bootcamp",
              detail:
                "Developed strong programming skills through an intensive training program, focusing on building dynamic web applications and mastering modern development tools and technologies.",
            },
            {
              year: "2021 - 2024",
              title: "Technical & Design Engineer - Jadara Electronics",
              detail:
                "Organized and managed all projects and operations, ensuring smooth execution and on-time delivery. Coordinated with universities and relevant stakeholders to align objectives and facilitate effective collaboration.",
            },
            {
              year: "2018 - 2021",
              title: "Site Engineer - Thunder Est.",
              detail:
                "Supervised mechanical assembly and played a critical role in coordinating between workers, supervisors, and project execution. Ensured alignment with blueprints and timelines, delivering projects on schedule and according to specifications.",
            },
            {
              year: "2018",
              title: "Mechanical Engineer Trainee - Bitar Consultant",
              detail:
                "Designed HVAC, water supply, and firefighting systems, collaborating with senior engineers to meet client specifications.",
            },
          ].map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
                {exp.year}
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {exp.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{exp.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Skills with Progress Bars */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          My Skills
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { skill: "Research", level: 90 },
            { skill: "Design", level: 80 },
            { skill: "Coordination", level: 95 },
            { skill: "Communication", level: 85 },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className="text-lg font-bold mb-2">{skill.skill}</h3>
              <div className="relative w-full bg-gray-300 dark:bg-gray-600 rounded-full h-5">
                <motion.div
                  className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                ></motion.div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

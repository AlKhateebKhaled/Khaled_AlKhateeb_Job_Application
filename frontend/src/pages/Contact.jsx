import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16">
      {/* Section: Contact Header */}
      <motion.div
        className="text-center mb-16 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
        <p className="text-lg max-w-3xl mx-auto">
          I’m always excited to connect with new people. Feel free to reach out through any of the channels below.
        </p>
      </motion.div>

      {/* Section: Contact Info */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {[
          {
            icon: <FaPhoneAlt className="text-blue-500 text-4xl mb-4" />,
            title: "Phone",
            value: "+962 772874494",
            link: "tel:+962772874494",
          },
          {
            icon: <FaEnvelope className="text-green-500 text-4xl mb-4" />,
            title: "Email",
            value: "khaled.hkhateeb@gmail.com",
            link: "mailto:khaled.hkhateeb@gmail.com",
          },
          {
            icon: <FaLinkedin className="text-blue-600 text-4xl mb-4" />,
            title: "LinkedIn",
            value: "linkedin.com/in/khaledal-khateeb",
            link: "https://www.linkedin.com/in/khaledal-khateeb",
          },
          {
            icon: <FaGithub className="text-gray-800 dark:text-white text-4xl mb-4" />, 
            title: "GitHub",
            value: "github.com/AlKhateebKhaled",
            link: "https://github.com/AlKhateebKhaled",
          },
          {
            icon: <FaGlobe className="text-purple-500 text-4xl mb-4" />, 
            title: "Portfolio",
            value: "khaled-alkhateeb-portfolio.netlify.app",
            link: "https://khaled-alkhateeb-portfolio.netlify.app",
          },
        ].map((contact, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {contact.icon}
            <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600"
            >
              {contact.value}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

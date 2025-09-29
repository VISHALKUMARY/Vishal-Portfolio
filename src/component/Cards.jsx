import React from "react";
import { motion } from "framer-motion";

// Animation variant
const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    },
  };
};

const Cards = ({ item, onImageClick, delay = 0 }) => {
  return (
    <motion.div
      variants={fadeIn("up", delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-red-500/40 transition duration-300 overflow-hidden transform hover:-translate-y-1"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          onClick={() => onImageClick(item)}
          className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-3">{item.desc}</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          {item.live && (
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold rounded-full bg-red-500 text-white hover:bg-red-600 transition"
            >
              Live Site
            </a>
          )}
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold rounded-full border border-gray-300 text-gray-200 hover:border-red-400 hover:text-red-400 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;

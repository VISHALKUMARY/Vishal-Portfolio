import React from "react";
import resume1 from "../assets/Vishal Resume.pdf";
import vishal from "../assets/vishal.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* ===== Decorative Background Shapes ===== */}
      <div className="absolute -top-20 -left-20 w-[20rem] sm:w-[24rem] md:w-[28rem] h-[20rem] sm:h-[24rem] md:h-[28rem] bg-red-100/40 rounded-full blur-[120px]" />
      <div className="absolute -bottom-20 -right-20 w-[20rem] sm:w-[24rem] md:w-[28rem] h-[20rem] sm:h-[24rem] md:h-[28rem] bg-pink-100/40 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16 py-16 lg:py-24 relative z-10">
          {/* ===== Left Text Section ===== */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col space-y-4 text-center md:text-left px-2 sm:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Hi, There
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              I'm Vishal Kumar
            </h2>

            {/* ===== Typing Animation for H3 ===== */}
            <h3 className="text-lg sm:text-xl text-gray-700">
              <span className="typing border-r-2 border-gray-700 pr-1">
                MERN Developer | React, Node.js, Express, MongoDB, JS, HTML, CSS
              </span>
            </h3>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-lg mx-auto md:mx-0">
              I'm a passionate web developer with expertise in React, Node.js,
              and modern web technologies. I love creating beautiful and
              functional websites that solve real-world problems.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href={resume1}
                download="Vishal_Resume.pdf"
                className="inline-block mt-4 w-40 text-center bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 shadow-md hover:shadow-red-300 transition"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* ===== Right Image Section ===== */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-[26rem]">
              <img
                src={vishal}
                alt="Vishal Kumar"
                className="w-full h-auto max-h-[80vh] rounded-xl shadow-lg object-cover"
              />
              {/* Floating shapes */}
              <div className="absolute -bottom-6 -right-6 w-12 h-12 sm:w-16 sm:h-16 bg-red-200/40 rounded-full animate-pulse" />
              <div className="absolute -top-6 -left-6 w-14 h-14 sm:w-20 sm:h-20 bg-pink-200/40 rounded-full animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== Typing Animation CSS ===== */}
      <style jsx>{`
        .typing {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 4s steps(60, end) infinite,
            blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          0% {
            width: 0;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 0;
          }
        }

        @keyframes blink-caret {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

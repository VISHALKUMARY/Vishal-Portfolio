import React, { useState, useEffect } from "react";
import resume1 from "../assets/Vishal Resume.pdf";
import vishal from "../assets/vishal.png";
import { motion, AnimatePresence } from "framer-motion";

// Animation variant
const fadeIn = (direction = "up", delay = 0) => ({
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
});

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const modalContent = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-white overflow-hidden scroll-mt-24 py-24 sm:py-32"
    >
      {/* ===== Decorative Blobs ===== */}
      <div className="absolute -top-20 -left-20 w-[24rem] h-[24rem] bg-red-100/40 rounded-full blur-[120px] z-0" />
      <div className="absolute -bottom-20 -right-20 w-[24rem] h-[24rem] bg-pink-100/40 rounded-full blur-[120px] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* ===== Left Text Section ===== */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col space-y-5 text-center md:text-left"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Hi, There
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              I'm Vishal Kumar
            </h2>

            {/* ===== Typing Text ===== */}
            <h3 className="text-lg sm:text-xl text-gray-700">
              <span className="typing border-r-2 border-gray-700 pr-1">
                MERN Developer | React, Node.js, Express, MongoDB, JavaScript, HTML, CSS
              </span>
            </h3>

            <p className=" text-gray-600 leading-relaxed text-base sm:text-lg max-w-lg mx-auto md:mx-0">
              I'm a passionate full-stack developer with expertise in React,
              Node.js, and modern web technologies. I love creating beautiful
              and functional websites that solve real-world problems.
            </p>

            {/* ===== Buttons: Download & View ===== */}
            <div className="flex justify-center md:justify-start gap-4 mt-4 flex-wrap">
              <a
                href={resume1}
                download="Vishal_Resume.pdf"
                className="inline-block w-40 text-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 shadow-md hover:shadow-lg hover:shadow-red-400/40 transition-all duration-300"
              >
                Download CV
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block w-40 bg-white border-2 border-red-500 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 hover:scale-105 transition-all duration-300 shadow-sm"
              >
                View CV
              </button>
            </div>
          </motion.div>

          {/* ===== Right Image Section ===== */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-[26rem]">
              <img
                src={vishal}
                alt="Vishal Kumar"
                className="w-full h-auto max-h-[80vh] rounded-xl shadow-2xl object-cover border-4 border-white"
              />
              {/* Floating shapes */}
              <div className="absolute -bottom-6 -right-6 w-12 h-12 sm:w-16 sm:h-16 bg-red-200/50 rounded-full animate-ping" />
              <div className="absolute -top-6 -left-6 w-14 h-14 sm:w-20 sm:h-20 bg-pink-200/50 rounded-full animate-ping" />
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
          animation: typing 6s steps(40, end) infinite,
            blink-caret 0.75s step-end infinite;
          max-width: 100%;
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

      {/* ===== Modal for Viewing CV ===== */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsModalOpen(false)} // close on backdrop click
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()} // prevent closing on content click
            >
              {/* Modal header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">
                  Vishal Kumar Resume
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close modal"
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  &#x2715;
                </button>
              </div>

              {/* PDF embed */}
              <iframe
                src={resume1 + "#toolbar=0"} // hide default pdf toolbar
                title="Vishal Kumar Resume"
                className="w-full flex-1"
                style={{ minHeight: "500px" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Additional Modal & Scrollbar Styles ===== */}
      <style jsx>{`
        /* Modal backdrop enhancement */
        .backdrop-blur-sm {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Close button styles */
        button[aria-label="Close modal"] {
          font-size: 1.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        button[aria-label="Close modal"]:hover {
          background-color: #fed7e2; /* light pink */
          color: #b91c1c; /* darker red */
        }

        /* Scrollbar styles for iframe container */
        iframe::-webkit-scrollbar {
          width: 8px;
        }
        iframe::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        iframe::-webkit-scrollbar-thumb {
          background: #f87171; /* red-400 */
          border-radius: 4px;
        }
        iframe::-webkit-scrollbar-thumb:hover {
          background: #ef4444; /* red-500 */
        }

        /* Responsive tweaks */
        @media (max-width: 640px) {
          /* Modal width smaller on small screens */
          div[class*="max-w-4xl"] {
            max-width: 90vw !important;
            max-height: 75vh !important;
          }

          iframe {
            min-height: 400px !important;
          }
        }

        /* Modal container shadow and border */
        div[class*="max-w-4xl"] {
          border: 1px solid #fca5a5; /* light red border */
          box-shadow: 0 10px 25px rgba(244, 63, 94, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Hero;

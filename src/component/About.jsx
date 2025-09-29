import React from "react";
import { motion } from "framer-motion";

import mernstack from "../assets/mernstack.png";
import Html from "../assets/Html.png";
import JS from "../assets/JS.png";
import CSS from "../assets/CSS.png";
import NodeLogo from "../assets/NodeLogo.png";
import React1 from "../assets/React1.png";
import Redux from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind.png";
import mongodb from "../assets/mongodb.svg";
import Bootstrap from "../assets/Bootstrap.png";
import Express from "../assets/Express.png";

// Reusable animation variant
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

const About = () => {
  return (
    <section id="about" className="relative bg-gray-800 overflow-hidden scroll-mt-20">
      {/* ===== Decorative Wave Top ===== */}
      <div className="absolute top-0 left-0 w-full -translate-y-1 z-0">
        <motion.svg
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          className="w-full h-24 sm:h-32 md:h-40 fill-white"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,160L48,165.3C96,171,192,181,288,192C384,203,480,213,576,208C672,203,768,181,864,149.3C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128V0H0Z" />
        </motion.svg>
      </div>

      {/* ===== Floating Glow Background ===== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-28 w-[30rem] h-[30rem]  rounded-full blur-[120px]" />
        <div className="absolute bottom-[-8rem] right-[-6rem] w-[28rem] h-[28rem]rounded-full blur-[120px]" />
      </div>

      {/* ===== Main Content ===== */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 z-10">
        {/* ===== Heading ===== */}
        <motion.div
          className="text-center mb-20"
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-xs sm:text-sm md:text-base text-red-600 font-bold uppercase tracking-[0.25em]">
            About Me
          </h2>
          <p className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            Hi, I’m Vishal Kumar
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-white leading-relaxed">
            A Full-Stack Developer passionate about crafting intuitive,
            scalable, and beautiful web applications with the powerful MERN
            stack.
          </p>
        </motion.div>

        {/* ===== Journey & Skills ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* ---- Journey ---- */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-white text-[1.05rem] leading-relaxed">
              I began my web development journey driven by a passion for
              building intuitive and scalable applications. With strong command
              of the MERN stack (MongoDB, Express.js, React, and Node.js), I’ve
              created projects such as{" "}
              <span className="font-semibold text-red-500">Devpost</span> and{" "}
              <span className="font-semibold text-red-500">TaskTrek</span> — a
              real-time task management platform. On the frontend, I’ve crafted
              dynamic interfaces like a responsive{" "}
              <span className="font-semibold text-red-500">
                Food Ordering App
              </span>{" "}
              with elegant UI and advanced filtering features.
            </p>
            <img
              src={mernstack}
              alt="MERN stack"
              className="w-60 mt-10 rounded-xl shadow-xl border border-red-200/70 p-3
                         hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            />
          </motion.div>

          {/* ---- Skills ---- */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="backdrop-blur-md border border-red-200 rounded-2xl p-10 
                          bg-white/80 dark:bg-gray-800/80 shadow-xl
                          hover:shadow-red-300/70 transition-shadow duration-300"
          >
            <h3 className="text-3xl font-semibold text-white mb-10 text-center">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-5">
              {[
                { img: Html, label: "HTML" },
                { img: CSS, label: "CSS" },
                { img: JS, label: "JavaScript" },
                { img: React1, label: "React" },
                { img: Redux, label: "Redux" },
                { img: Tailwind, label: "Tailwind CSS" },
                { img: Bootstrap, label: "Bootstrap" },
                { img: NodeLogo, label: "Node.js" },
                { img: mongodb, label: "MongoDB" },
                { img: Express, label: "Express.js" },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 px-4 py-2
                             border border-red-300 rounded-xl bg-gray-50/80 dark:bg-gray-700/80
                             shadow-sm hover:border-red-400 hover:bg-white/90 dark:hover:bg-gray-600
                             hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={skill.img}
                    alt={skill.label}
                    className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium text-gray-800 dark:text-gray-100 group-hover:text-red-600">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===== More About Me ===== */}
        <motion.div
          className="mt-24 text-center max-w-3xl mx-auto"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white">More About Me</h3>
          <p className="mt-6 text-lg sm:text-xl text-white leading-relaxed">
            Beyond coding, I love exploring emerging technologies and keeping up
            with modern web trends. I also run a YouTube channel where I share
            updates on tech, sports, and global current affairs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

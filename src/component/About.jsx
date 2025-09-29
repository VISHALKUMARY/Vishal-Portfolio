import React from "react";
import { motion } from "framer-motion";

// === Asset Imports ===
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

// === Education Logos (via URL) ===
const schoolLogo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ct9sGiE3C9NnMUtJBY4KEUAHh6sl5V9YAg&s"; // 10th
const collegeLogo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ct9sGiE3C9NnMUtJBY4KEUAHh6sl5V9YAg&s"; // 12th
const universityLogo =
  "https://www.lkctc.edu.in/static/media/LKCTC-LOGO.26864b6a03c9e2521485.png"; // B.Tech

// === Animation Variant ===
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
    <section
      id="about"
      className="relative bg-gray-900 dark:bg-gray-900 overflow-hidden scroll-mt-20"
    >
      {/* === Decorative Wave Top === */}
      <div className="absolute top-0 left-0 w-full -translate-y-1 z-0">
        <motion.svg
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          className="w-full h-24 sm:h-32 md:h-40 fill-white"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,160L48,165.3C96,171,192,181,288,192C384,203,480,213,576,208C672,203,768,181,864,149.3C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128V0H0Z" />
        </motion.svg>
      </div>

      {/* === Floating Background Effects === */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-28 w-[30rem] h-[30rem] rounded-full blur-[120px] opacity-20 dark:opacity-10" />
        <div className="absolute bottom-[-8rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full blur-[120px]  opacity-20 dark:opacity-10" />
      </div>

      {/* === Main Content === */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 z-10">
        {/* === Heading === */}
        <motion.div
          className="text-center mb-20"
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-xs sm:text-sm md:text-base text-red-600 font-bold uppercase tracking-[0.25em] select-none">
            About Me
          </h2>
          <p className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Hi, I’m Vishal Kumar
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
            A Full-Stack Developer passionate about crafting intuitive,
            scalable, and beautiful web applications with the powerful MERN
            stack.
          </p>
        </motion.div>

        {/* === Journey & Skills === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* --- Journey --- */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 tracking-wide drop-shadow-md">
              My Journey
            </h3>
            <p className="text-gray-300 text-[1.05rem] leading-relaxed tracking-wide">
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
              loading="lazy"
              draggable={false}
            />
          </motion.div>

          {/* --- Skills --- */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="backdrop-blur-md border border-red-200 rounded-2xl p-10 
            bg-white/80 dark:bg-gray-800/80 shadow-xl
            hover:shadow-red-300/70 transition-shadow duration-300"
          >
            <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-10 tracking-wide">
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
                  className="group flex items-center gap-3 px-5 py-2
                  border border-red-300 rounded-xl bg-gray-50/90 dark:bg-gray-700/90
                  shadow-sm hover:border-red-400 hover:bg-white/95 dark:hover:bg-gray-600
                  hover:scale-110 transition-all duration-300 cursor-default"
                  tabIndex={0}
                  aria-label={skill.label}
                >
                  <img
                    src={skill.img}
                    alt={skill.label}
                    className="w-8 h-8 object-contain group-hover:scale-125 transition-transform"
                    loading="lazy"
                    draggable={false}
                  />
                  <span className="font-medium text-gray-800 dark:text-gray-100 group-hover:text-red-600 select-none">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* === Education Section === */}
        <motion.div
          className="mt-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* === Education Section === */}
          <section className="mb-20 sm:mb-28 bg-gray-900 bg-opacity-60 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl sm:shadow-2xl border border-red-700">
            <h3 className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-10 sm:mb-14 gap-3 underline decoration-red-500 underline-offset-6 sm:underline-offset-8 select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 sm:h-10 sm:w-10 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
                />
              </svg>
              Education
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 text-white">
              {[
                {
                  logo: schoolLogo,
                  alt: "10th Grade",
                  title: "10th Grade",
                  subtitle: "PBSE Board",
                  year: "2019",
                  prac: 60,
                  border: "border-red-500",
                },
                {
                  logo: collegeLogo,
                  alt: "12th Grade",
                  title: "12th Grade",
                  subtitle: "PBSE Board",
                  year: "2021",
                  prac: 70,
                  border: "border-red-500",
                },
                {
                  logo: universityLogo,
                  alt: "B.Tech",
                  title: "B.Tech in Computer Science",
                  subtitle: "Lyallpur Khalsa College Jalandhar",
                  year: "2021-2025",
                  CGPA: 6.57,
                  border: "border-red-500",
                  colSpanFull: true,
                },
              ].map(
                (
                  {
                    logo,
                    alt,
                    title,
                    subtitle,
                    year,
                    border,
                    colSpanFull,
                    prac,
                    CGPA,
                  },
                  i
                ) => (
                  <div
                    key={i}
                    className={`relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 ${border} border-l-4 sm:border-l-6 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl transition-all duration-300 sm:hover:scale-[1.05] sm:hover:shadow-red-600/50 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 ${
                      colSpanFull ? "md:col-span-2 justify-center" : ""
                    }`}
                  >
                    <img
                      src={logo}
                      alt={alt}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg drop-shadow-md"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="flex flex-col w-full max-w-full sm:max-w-[360px] text-center sm:text-left">
                      <h4 className="text-xl sm:text-2xl font-semibold text-white mb-1 tracking-wide">
                        {title}
                      </h4>
                      <p className="text-gray-300 text-sm font-medium tracking-wide">
                        {subtitle}
                      </p>
                      <p className="mt-1 text-gray-400 font-mono tracking-wide">
                        {year}
                      </p>

                      {(prac || CGPA) && (
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-1 text-xs">
                            <span className="font-semibold text-white select-none">
                              {prac ? "Percentage" : "CGPA"}
                            </span>
                            <span className="font-mono text-gray-300 select-none">
                              {prac ? `${prac}%` : CGPA}
                            </span>
                          </div>
                          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                            <div
                              className="h-2 bg-red-500 rounded-full transition-all duration-700"
                              style={{
                                width: prac
                                  ? `${prac}%`
                                  : `${(CGPA / 10) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </section>

          {/* === Experience Section === */}
          <section className="mb-16 sm:mb-24 bg-gray-900 bg-opacity-60 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl sm:shadow-2xl border border-green-700">
            <h3 className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-10 sm:mb-14 gap-3 underline decoration-green-500 underline-offset-6 sm:underline-offset-8 select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 sm:h-10 sm:w-10 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-2a4 4 0 014-4h1"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h6m-3-3v6m-3 6v3m-6-3v3"
                />
              </svg>
              Experience
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 text-white">
              {[
                {
                  logo: "https://novemcontrols.com/wp-content/uploads/2025/05/novem_controls-removebg-preview.webp",
                  alt: "Internship",
                  title: "6-Week Industrial Training",
                  subtitle: "MERN Stack Developer",
                  year: "Jan-July 2025",
                  border: "border-green-500",
                  colSpanFull: true,
                },
                {
                  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdw4Xn2-gYhvjx4OrSwNBCX1z-HNfRSPcgJw&s",
                  alt: "Industrial Training",
                  title: "45-Days Training",
                  subtitle: "Frontend Developer",
                  year: "Jul-Aug 2023",
                  border: "border-green-500",
                },
              ].map(
                (
                  { logo, alt, title, subtitle, year, border, colSpanFull },
                  i
                ) => (
                  <div
                    key={i}
                    className={`relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 ${border} border-l-4 sm:border-l-6 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl transition-all duration-300 sm:hover:scale-[1.05] sm:hover:shadow-green-600/50 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 ${
                      colSpanFull ? "md:col-span-2 justify-center" : ""
                    }`}
                  >
                    <img
                      src={logo}
                      alt={alt}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg drop-shadow-md"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="flex flex-col w-full max-w-full sm:max-w-[360px] text-center sm:text-left">
                      <h4 className="text-xl sm:text-2xl font-semibold text-white mb-1 tracking-wide">
                        {title}
                      </h4>
                      <p className="text-gray-300 text-sm font-medium tracking-wide">
                        {subtitle}
                      </p>
                      <p className="mt-1 text-gray-400 font-mono tracking-wide">
                        {year}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

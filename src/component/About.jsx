import React from "react";
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

const About = () => {
  return (
    <section className="relative bg-gray-100 py-16" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-lg text-red-600 font-bold uppercase tracking-wider">About Me</h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">Hi, I'm Vishal Kumar</p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            A Full-Stack Developer with expertise in web development, SEO, and the MERN stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* My Journey Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
            <p className="mt-4 text-gray-700 text-[1.05rem] leading-relaxed">
              I started my journey in web development with a passion for building intuitive and scalable applications.
              With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I’ve built full-stack projects
              such as <span className="font-semibold text-red-500">Devpost</span> and <span className="font-semibold text-red-500">TaskTrek</span> — a task management platform
              with real-time updates and collaboration. On the frontend, I've created dynamic projects like a responsive
              <span className="font-semibold text-red-500"> Food Ordering App</span> with user-centric design and filtering features.
            </p>
            <img src={mernstack} alt="MERN stack" className="w-52 mt-6 rounded-lg shadow-lg border border-red-200 p-2" />
          </div>

          {/* Skills & Expertise Section */}
          <div className="border border-red-200 rounded-2xl p-8 bg-white shadow-xl hover:shadow-red-300 transition-shadow">
            <h3 className="text-2xl font-semibold text-red-600 mb-6 text-center">Skills & Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
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
                  className="flex items-center gap-2 px-3 py-2 border border-red-300 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-all duration-200"
                >
                  <img src={skill.img} alt={skill.label} className="w-8 h-8 object-contain" />
                  <span className="font-medium text-gray-800">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* More About Me */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900">More About Me</h3>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Apart from coding, I enjoy learning new technologies and staying updated with web development trends.
            I also run a YouTube channel where I spread news on tech, sports, and other current affairs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

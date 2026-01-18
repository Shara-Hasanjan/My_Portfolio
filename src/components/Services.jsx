import React from "react";
import { motion } from "framer-motion";


const capabilities = [
  {
    title: "Frontend Web Apps",
    tech: "React, Tailwind, Responsive UI",
    desc: "Building modern, mobile-friendly interfaces with reusable components and clean layouts.",
    icon: "💻",
  },
  {
    title: "Full Stack Systems",
    tech: "Node / Go, REST APIs, MySQL",
    desc: "Developing backend services with authentication and database integration.",
    icon: "🛠️",
  },
  {
    title: "Software Projects",
    tech: "Java & Python Applications",
    desc: "Academic systems using OOP, file handling, and strong problem-solving logic.",
    icon: "📦",
  },
  {
    title: "Team Projects",
    tech: "Agile, GitHub, Collaboration",
    desc: "Working in teams using Scrum, version control, and real project workflows.",
    icon: "🤝",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 bg-[#2f3338] glow-hover">
      <div className="max-w-7xl mx-auto px-6 text-center ">

        {/* Section Header */}
        <p className="text-yellow-400 tracking-widest text-sm mb-3">
          CAPABILITIES
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-14">
          What I Can Build
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f232a] rounded-2xl p-8 text-left
                         hover:scale-[1.03] transition duration-300
                         border border-white/5 hover:border-yellow-400/40
                         shadow-lg"
            >
              <div className="text-3xl mb-4">{item.icon}</div>

              <h3 className="text-white text-xl font-semibold mb-1">
                {item.title}
              </h3>

              <p className="text-yellow-400 text-sm mb-3">
                {item.tech}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;

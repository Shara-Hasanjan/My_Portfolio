import React from "react";

import github from "../assets/github.webp";
import linkedin from "../assets/linkedln.png";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/email.png";

const Footer = () => {
  return (
    <footer className="bg-[#1f232a] text-gray-300 pt-14 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-xl font-semibold">
            Ishara Hasanjan<span className="text-yellow-400">.</span>
          </h3>
          <p className="text-sm mt-2 text-gray-400">
            Computer Science Undergraduate <br />
            Full Stack Web Developer
          </p>
        </div>

        {/* MIDDLE LINKS */}
        <div className="flex justify-center gap-6 text-sm">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="flex justify-center md:justify-end gap-5">
          <a href="https://github.com/yourusername" target="_blank">
            <img src={github} alt="GitHub" className="w-7 hover:scale-110 transition" />
          </a>

          <a href="https://linkedin.com/in/yourusername" target="_blank">
            <img src={linkedin} alt="LinkedIn" className="w-7 hover:scale-110 transition" />
          </a>

          <a href="https://wa.me/94XXXXXXXXX" target="_blank">
            <img src={whatsapp} alt="WhatsApp" className="w-7 hover:scale-110 transition" />
          </a>

          <a href="mailto:yourmail@gmail.com">
            <img src={email} alt="Email" className="w-7 hover:scale-110 transition" />
          </a>
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Ishara Hasanjan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

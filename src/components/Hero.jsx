import heroImg from "../assets/hero.png";
import resume from "../assets/Ishara_CV.pdf";
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-[#242629] overflow-hidden"
    >
      {/* TECH COMPONENT BACKGROUND */}
      <TechBackground />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full grid grid-cols-3 px-14">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center pb-5 pl-2"
        >
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold leading-tight">
            Ishara <br />
            Hasanjan<span className="text-yellow-400 ml-1">.</span>
          </h1>

          <br />

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-[2px] bg-yellow-400 mb-6"
          ></motion.div>

          <br />

          <a
            href={resume}
            download
            className="inline-block border-2 border-yellow-400 text-yellow-400 px-12 py-5 text-lg hover:bg-yellow-400 hover:text-black transition w-fit"
          >
            MY RESUME
          </a>

          <br />

          <a
            href="#contact"
            className="border-2 border-yellow-400 text-yellow-400 px-12 py-5 text-lg hover:bg-yellow-400 hover:text-black transition w-fit"
          >
            CONTACT ME
          </a>
        </motion.div>

        <div></div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center pb-30 pl-20"
        >
          <p className="text-yellow-400 tracking-widest text-sm mb-3">
            INTRODUCTION
          </p>

          <h2 className="text-5xl font-bold mb-6">
            UNDERGRADUATE <br /> COMPUTER SCIENCE <br /> STUDENT
          </h2>
        </motion.div>
      </div>



      {/* HERO IMAGE */}
      <motion.img
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        src={heroImg}
        alt="Hero"
        className="absolute bottom-0 right-[32%] h-[92vh] object-contain pointer-events-none drop-shadow-2xl z-10"
      />
    </section>
  );
}

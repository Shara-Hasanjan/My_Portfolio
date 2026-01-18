import { motion } from "framer-motion";
import { FaPython, FaJava, FaJs, FaReact, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "Python", percent: 85, icon: <FaPython className="text-yellow-300" /> },
  { name: "Java", percent: 80, icon: <FaJava className="text-red-400" /> },
  { name: "JavaScript", percent: 75, icon: <FaJs className="text-yellow-400" /> },
  { name: "React", percent: 70, icon: <FaReact className="text-cyan-400" /> },
  { name: "MySQL", percent: 65, icon: <FaDatabase className="text-blue-400" /> },
];

export default function About() {
  return (
    <section id="about" className="bg-[#2b2f33] text-white py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 tracking-widest mb-3">ABOUT ME</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who I Am
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I am currently pursuing a BSc (Hons) in Computer Science awarded by the University of Westminster (UK) at the Informatics Institute of Technology (IIT), Sri Lanka. I have a strong academic
            foundation in software development, web technologies, and
            information systems, gained through coursework and project-based
            learning.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I have experience working on both individual and team projects,
            including web applications and system-based solutions. I am actively
            seeking internship or junior-level opportunities to gain industry
            exposure and grow as a full-stack engineer.
          </p>
        </motion.div>

        {/* RIGHT SKILLS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold mb-6">Technical Skills</h3>

          <div className="space-y-7 mt-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3 font-medium">
                    <span className="text-xl">{skill.icon}</span>
                    {skill.name}
                  </div>
                  <span className="text-yellow-400">{skill.percent}%</span>
                </div>

                <div className="w-full h-3 bg-[#1f2226] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

const skills = [
  { name: "HTML", percent: 95, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", percent: 90, icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "JavaScript", percent: 85, icon: <FaJs className="text-yellow-400" /> },
  { name: "React", percent: 80, icon: <FaReact className="text-cyan-400" /> },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#2b2f33] text-white py-24 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 tracking-widest mb-3">ABOUT ME</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who I Am
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I am a Computer Science undergraduate passionate about building
            modern web applications, scalable systems, and clean user
            interfaces. I enjoy learning new technologies and improving my
            problem-solving skills every day.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My focus is on full-stack development using modern frameworks and
            best practices to deliver fast and reliable digital experiences.
          </p>
        </motion.div>

        {/* RIGHT SKILLS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
        

          <h3 className="text-3xl font-bold mb-6">
            What I Work With
          </h3>

          <div className="space-y-8 mt-8">

            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >

                {/* Label */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-medium">
                    <span className="text-xl">{skill.icon}</span>
                    {skill.name}
                  </div>

                  <span className="text-yellow-400">
                    {skill.percent}%
                  </span>
                </div>

                {/* Bar */}
                <div className="w-full h-3 bg-[#1f2226] rounded-full overflow-hidden">

                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
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

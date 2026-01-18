import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024 - Present",
    title: "BSc Computer Science",
    place: "Informatics Institute of Technology (IIT)",
    desc: "Currently following undergraduate degree in Computer Science with focus on software engineering and web development.",
  },
  {
    year: "2023",
    title: "Foundation in IT",
    place: "Informatics Institute of Technology (IIT)",
    desc: "Completed foundation program with strong results in programming and mathematics.",
  },
  {
    year: "2022",
    title: "Ordinary Level",
    place: "Mount Calvary High School",
    desc: "Senior Prefect, Scout, Volleyball player and outstanding academic performance.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-950 glow-hover">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">Experience</h2>

        <div className="relative border-l border-white/20 ml-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-8"
            >
              {/* Dot */}
              <span className="absolute -left-[9px] w-4 h-4 bg-red-500 rounded-full"></span>

              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                <span className="text-red-500 text-sm">{exp.year}</span>
                <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
                <p className="text-gray-400 text-sm">{exp.place}</p>
                <p className="text-gray-400 mt-2">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

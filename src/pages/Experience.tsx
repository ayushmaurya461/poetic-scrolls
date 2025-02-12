
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "TechCorp Solutions",
    role: "Senior Frontend Developer",
    period: "2021 - Present",
    description: "Leading the frontend development team in building enterprise-scale applications using Angular and React. Implemented micro-frontend architecture and improved performance by 40%.",
    technologies: ["Angular", "React", "TypeScript", "Micro-frontends"]
  },
  {
    company: "Digital Innovations Inc",
    role: "Frontend Developer",
    period: "2019 - 2021",
    description: "Developed interactive 3D visualizations using Three.js. Built responsive web applications with modern JavaScript frameworks.",
    technologies: ["Three.js", "React", "WebGL", "Redux"]
  },
  {
    company: "WebTech Solutions",
    role: "Junior Developer",
    period: "2018 - 2019",
    description: "Started my journey in web development, working on various client projects and learning modern web technologies.",
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery"]
  }
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 md:px-6"
    >
      <div className="container mx-auto py-20">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">Experience</h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold">{exp.company}</h3>
                  <p className="text-gray-400">{exp.role}</p>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-full bg-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

import { motion } from 'framer-motion';
import { useState } from 'react';
import DetailDialog from '@/components/ui/DetailDialog';

const experiences = [
  {
    company: "TechCorp Solutions",
    role: "Senior Frontend Developer",
    period: "2021 - Present",
    description: "Leading the frontend development team in building enterprise-scale applications using Angular and React. Implemented micro-frontend architecture and improved performance by 40%.",
    technologies: ["Angular", "React", "TypeScript", "Micro-frontends"],
    details: {
      achievements: [
        "Led a team of 5 developers in implementing micro-frontend architecture",
        "Reduced application load time by 40% through code splitting and lazy loading",
        "Implemented CI/CD pipeline using GitHub Actions"
      ],
      responsibilities: [
        "Architecture design and implementation",
        "Code review and mentoring",
        "Technical documentation"
      ]
    }
  },
  {
    company: "Digital Innovations Inc",
    role: "Frontend Developer",
    period: "2019 - 2021",
    description: "Developed interactive 3D visualizations using Three.js. Built responsive web applications with modern JavaScript frameworks.",
    technologies: ["Three.js", "React", "WebGL", "Redux"],
    details: {
      achievements: [
        "Developed interactive 3D visualizations using Three.js",
        "Built responsive web applications with modern JavaScript frameworks",
        "Collaborated with designers to create engaging user interfaces"
      ],
      responsibilities: [
        "Frontend development",
        "UI/UX design",
        "Code review"
      ]
    }
  },
  {
    company: "WebTech Solutions",
    role: "Junior Developer",
    period: "2018 - 2019",
    description: "Started my journey in web development, working on various client projects and learning modern web technologies.",
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery"],
    details: {
      achievements: [
        "Contributed to various client projects",
        "Learned modern web technologies",
        "Improved coding skills"
      ],
      responsibilities: [
        "Frontend development",
        "Bug fixing",
        "Code maintenance"
      ]
    }
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 md:px-6"
    >
      <div className="container mx-auto py-20">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">Experience</h1>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-white/20 transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 mt-6" />
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div 
                      className="glass p-6 rounded-xl cursor-pointer hover:bg-white/5 transition-colors"
                      onClick={() => setSelectedExp(exp)}
                    >
                      <div className="mb-4">
                        <h3 className="text-xl font-display font-bold">{exp.company}</h3>
                        <p className="text-gray-400">{exp.role}</p>
                        <span className="text-sm text-gray-400">{exp.period}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 rounded-full bg-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DetailDialog 
        isOpen={!!selectedExp} 
        onClose={() => setSelectedExp(null)}
      >
        {selectedExp && (
          <div className="p-6">
            <h2 className="text-2xl font-display font-bold mb-2">{selectedExp.company}</h2>
            <p className="text-gray-400 mb-6">{selectedExp.role} • {selectedExp.period}</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Achievements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {selectedExp.details.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {selectedExp.details.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </DetailDialog>
    </motion.div>
  );
};

export default Experience;

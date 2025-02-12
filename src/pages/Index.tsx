
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  const [section1Ref, section1InView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [section2Ref, section2InView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [section3Ref, section3InView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={section1Ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: section1InView ? 1 : 0 }}
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              Ayush Maurya
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Frontend Developer & Poet
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-white text-black font-medium"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={section2Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: section2InView ? 1 : 0, y: section2InView ? 0 : 50 }}
        className="min-h-screen flex items-center py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Angular', 'React', 'Three.js'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: section2InView ? 1 : 0, y: section2InView ? 0 : 20 }}
                transition={{ delay: index * 0.2 }}
                className="glass p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-display font-bold mb-4">{tech}</h3>
                <p className="text-gray-400">
                  Advanced proficiency in building modern web applications with industry-standard tools and best practices.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Work Section */}
      <motion.section
        ref={section3Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: section3InView ? 1 : 0, y: section3InView ? 0 : 50 }}
        className="min-h-screen flex items-center py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <motion.div
                key={project}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl cursor-pointer"
              >
                <div className="aspect-video rounded-lg bg-gray-800 mb-6" />
                <h3 className="text-2xl font-display font-bold mb-2">Project {project}</h3>
                <p className="text-gray-400">
                  A brief description of the project and its impact. Click to learn more about the
                  technical details and challenges overcome.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;

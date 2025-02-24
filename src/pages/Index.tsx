import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { skills } from '@/data/skills';
import QuoteSlideshow from '@/components/QuoteSlideshow';
import TypewriterEffect from '@/components/TypewriterEffect';
import { AdminDialog } from '@/components/AdminDialog';
import { useAdminShortcut } from '@/hooks/useAdminShortcut';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const { showLoginDialog, setShowLoginDialog } = useAdminShortcut();

  const [section1Ref, section1InView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [section2Ref, section2InView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [section3Ref, section3InView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [section4Ref, section4InView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [section5Ref, section5InView] = useInView({ threshold: 0.3, triggerOnce: true });

  const categories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    database: 'Database Technologies',
    cms: 'Content Management Systems',
    '3d': '3D Development',
    other: 'Other Tools'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <AdminDialog 
        open={showLoginDialog} 
        onOpenChange={setShowLoginDialog} 
      />
      <motion.section
        ref={section1Ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: section1InView ? 1 : 0 }}
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-white/50 to-blue-200/30 backdrop-blur-xl" />
          <div className="absolute -inset-[100%] animate-[spin_20s_linear_infinite] bg-gradient-to-br from-pink-200/20 via-purple-200/20 to-blue-200/20 backdrop-blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-gray-800">
              Ayush Maurya
            </h1>
            <div className="flex justify-center space-x-4">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all"
                >
                  View Projects
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all"
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>

            <QuoteSlideshow />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={section2Ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: section2InView ? 1 : 0 }}
        className="min-h-[50vh] flex items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: section2InView ? 0.5 : 0 }}
          transition={{ delay: 0.2 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: 0
              }}
              animate={{ 
                x: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%"
                ],
                y: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%"
                ],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }}
              style={{ opacity: 0.2 }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: section2InView ? 1 : 0 }}
            transition={{ delay: 0.3 }}
            className="text-center space-y-12"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: section2InView ? 0 : 50,
                opacity: section2InView ? 1 : 0
              }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% auto"
                }}
              >
                Crafting Digital Magic
              </motion.h2>
            </motion.div>

            <motion.div 
              className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: section2InView ? 1 : 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                {
                  title: "Experience Design",
                  description: "Crafting intuitive and engaging user experiences that leave lasting impressions",
                  icon: "✨"
                },
                {
                  title: "Creative Development",
                  description: "Bringing designs to life with clean, efficient, and maintainable code",
                  icon: "💻"
                },
                {
                  title: "Digital Innovation",
                  description: "Pushing boundaries with modern technologies and creative solutions",
                  icon: "🚀"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: section2InView ? 1 : 0,
                    y: section2InView ? 0 : 50
                  }}
                  transition={{ 
                    delay: 0.6 + (index * 0.2),
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <motion.div 
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 h-full
                             hover:bg-white/10 transition-colors duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      className="mb-4 text-4xl"
                    >
                      {item.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold mb-3 relative z-10">{item.title}</h3>
                    <p className="text-gray-300 relative z-10">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={section3Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: section3InView ? 1 : 0, y: section3InView ? 0 : 50 }}
        className="min-h-screen flex items-center py-20"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: section3InView ? 1 : 0, x: section3InView ? 0 : -50 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3eb]/80 to-transparent rounded-2xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: section3InView ? 1 : 0, x: section3InView ? 0 : 50 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800">About Me</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                As a seasoned Frontend Developer with expertise in Angular, React, and Three.js,
                I bring creative visions to life through code. My journey in technology is uniquely
                intertwined with my passion for poetry, allowing me to approach problem-solving
                with both logical precision and creative intuition.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                When I'm not crafting user interfaces or optimizing web performance, you'll find
                me writing poetry that often draws parallels between the digital and emotional
                landscapes we navigate.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={section4Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: section4InView ? 1 : 0, y: section4InView ? 0 : 50 }}
        className="min-h-screen flex items-center py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center text-gray-800">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categories).map(([category, title], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                  transition: { duration: 0.2 }
                }}
                className="relative group overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-md group-hover:backdrop-blur-lg transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/30 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-gray-800/5 to-gray-900/10" />
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-8 h-8 mb-2"
                          />
                          <span className="text-sm text-center text-gray-700">{skill.name}</span>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={section5Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: section5InView ? 1 : 0, y: section5InView ? 0 : 50 }}
        className="min-h-screen flex items-center py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center text-gray-800">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2].map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateX: 2,
                  rotateY: 2,
                  transition: { duration: 0.2 }
                }}
                className="relative group overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-pink-500/15 backdrop-blur-md group-hover:backdrop-blur-lg transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/20 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/15 via-gray-800/10 to-gray-900/15" />
                <div className="relative z-10 p-6">
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
                      alt="Project"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-gray-800">Project {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and its impact. Click to learn more about the
                    technical details and challenges overcome.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-sm rounded-full bg-white/50 text-gray-700 border border-red-100"
                      >
                        Tech {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-red-50 text-gray-800 hover:bg-red-100 border border-red-200 transition-all shadow-md hover:shadow-lg"
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;

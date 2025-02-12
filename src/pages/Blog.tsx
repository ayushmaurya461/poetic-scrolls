
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-6"
    >
      <div className="container mx-auto py-20">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">Blog</h1>
        <p className="text-gray-400">Coming soon...</p>
      </div>
    </motion.div>
  );
};

export default Blog;

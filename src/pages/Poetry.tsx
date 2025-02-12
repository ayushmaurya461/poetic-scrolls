
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Poetry = () => {
  useEffect(() => {
    document.body.style.background = 'hsl(351, 84%, 57%)';
    return () => {
      document.body.style.background = '';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-6 text-poetry-foreground"
    >
      <div className="container mx-auto py-20">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">Poetry</h1>
        <p className="text-poetry-foreground/80">Coming soon...</p>
      </div>
    </motion.div>
  );
};

export default Poetry;

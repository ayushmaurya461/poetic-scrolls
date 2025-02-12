
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const poems = [
  {
    id: 1,
    title: "Digital Dreams",
    content: "In circuits of silicon dreams,\nWhere binary stars gleam,\nCode flows like ancient streams,\nIn this digital regime.",
    likes: 24,
    comments: 5
  },
  {
    id: 2,
    title: "Algorithmic Heart",
    content: "My heart beats in sequences,\nLoops of love and pain,\nDebugging emotions,\nCompiling joy again.",
    likes: 31,
    comments: 7
  },
  {
    id: 3,
    title: "Recursive Love",
    content: "function love() {\n  if (heart.isFull()) return;\n  heart.grow();\n  love();\n}",
    likes: 42,
    comments: 9
  }
];

const Poetry = () => {
  const [likedPoems, setLikedPoems] = useState<number[]>([]);

  useEffect(() => {
    document.body.style.background = 'hsl(351, 84%, 57%)';
    return () => {
      document.body.style.background = '';
    };
  }, []);

  const handleLike = (id: number) => {
    setLikedPoems(prev => 
      prev.includes(id) ? prev.filter(poemId => poemId !== id) : [...prev, id]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 md:px-6 text-poetry-foreground"
    >
      <div className="container mx-auto py-20">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">Poetry</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {poems.map((poem) => (
            <motion.article
              key={poem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
            >
              <h2 className="text-2xl font-display font-bold mb-4">{poem.title}</h2>
              <p className="whitespace-pre-line mb-6 text-poetry-foreground/90">{poem.content}</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleLike(poem.id)}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                    likedPoems.includes(poem.id) ? 'bg-white/20' : 'bg-white/10'
                  }`}
                >
                  <span>❤️</span>
                  <span>{poem.likes + (likedPoems.includes(poem.id) ? 1 : 0)}</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10">
                  <span>💬</span>
                  <span>{poem.comments}</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Poetry;

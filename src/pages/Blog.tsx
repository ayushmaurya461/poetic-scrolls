
import { motion } from 'framer-motion';
import { useState } from 'react';

const blogs = [
  {
    id: 1,
    title: "Building 3D Experiences with Three.js and React",
    date: "March 15, 2024",
    excerpt: "Learn how to create immersive 3D experiences using Three.js and React. We'll cover everything from basic setup to advanced techniques.",
    likes: 42,
    comments: 8
  },
  {
    id: 2,
    title: "Micro-frontend Architecture: A Practical Guide",
    date: "March 10, 2024",
    excerpt: "Explore the benefits and challenges of implementing micro-frontend architecture in large-scale applications.",
    likes: 35,
    comments: 12
  },
  {
    id: 3,
    title: "Advanced Angular Performance Optimization",
    date: "March 5, 2024",
    excerpt: "Deep dive into Angular performance optimization techniques that can significantly improve your application's speed.",
    likes: 28,
    comments: 6
  }
];

const Blog = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const handleLike = (id: number) => {
    setLikedPosts(prev => 
      prev.includes(id) ? prev.filter(postId => postId !== id) : [...prev, id]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 md:px-6"
    >
      <div className="container mx-auto py-20">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-xl p-6"
            >
              <h2 className="text-2xl font-display font-bold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{blog.date}</p>
              <p className="text-gray-300 mb-6">{blog.excerpt}</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleLike(blog.id)}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                    likedPosts.includes(blog.id) ? 'bg-white/20' : 'bg-white/10'
                  }`}
                >
                  <span>❤️</span>
                  <span>{blog.likes + (likedPosts.includes(blog.id) ? 1 : 0)}</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10">
                  <span>💬</span>
                  <span>{blog.comments}</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;

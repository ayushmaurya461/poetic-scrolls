import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "Building 3D Experiences with Three.js and React",
    date: "March 15, 2024",
    excerpt: "Learn how to create immersive 3D experiences using Three.js and React. We'll cover everything from basic setup to advanced techniques.",
    content: `Three.js is a powerful library that brings 3D graphics to the web browser. When combined with React, it opens up endless possibilities for creating immersive experiences.

In this comprehensive guide, we'll explore:
- Setting up Three.js in a React project
- Creating basic 3D scenes
- Implementing user interactions
- Optimizing performance
- Advanced rendering techniques

We'll also look at practical examples and best practices for production applications.`,
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
  const navigate = useNavigate();
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
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 text-gray-800">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-sm hover:bg-white/90 transition-colors"
            >
              <div 
                className="cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-500 mb-6">{post.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(post.id);
                  }}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                    likedPosts.includes(post.id) ? 'bg-red-100' : 'bg-white'
                  } border border-red-200 transition-colors`}
                >
                  <span>❤️</span>
                  <span className="text-gray-700">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                </button>
                <button 
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200"
                >
                  <span>💬</span>
                  <span className="text-gray-700">{post.comments}</span>
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

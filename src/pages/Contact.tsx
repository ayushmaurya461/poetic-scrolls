import { motion } from 'framer-motion';
import { Instagram, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 px-4 md:px-6"
    >
      <div className="container mx-auto py-8">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-8 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/5 border border-gray-400/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/5 border border-gray-400/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-gray-400/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400/50"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-white text-black font-medium rounded-lg border-2 border-gray-400/50 hover:bg-white/90 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-display font-bold">Connect With Me</h2>
            <div className="space-y-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-lg border-2 border-gray-400/50 hover:bg-white/10 hover:border-gray-300/70 transition-all"
              >
                <Instagram className="w-6 h-6" />
                <span>Follow on Instagram</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-lg border-2 border-gray-400/50 hover:bg-white/10 hover:border-gray-300/70 transition-all"
              >
                <Github className="w-6 h-6" />
                <span>Follow on GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-lg border-2 border-gray-400/50 hover:bg-white/10 hover:border-gray-300/70 transition-all"
              >
                <Linkedin className="w-6 h-6" />
                <span>Connect on LinkedIn</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-lg border-2 border-gray-400/50 hover:bg-white/10 hover:border-gray-300/70 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Message on WhatsApp</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-4 glass rounded-lg border-2 border-gray-400/50 hover:bg-white/10 hover:border-gray-300/70 transition-all"
              >
                <Mail className="w-6 h-6" />
                <span>Send an Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const isPoetry = location.pathname === '/poetry';
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/blog', label: 'Blog' },
    { to: '/poetry', label: 'Poetry' },
    { to: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const linkClass = `relative py-2 group transition-colors ${
    isPoetry ? 'text-white hover:text-white' : 'text-gray-800 hover:text-gray-900'
  }`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isPoetry ? 'text-white' : 'text-gray-800'
      } relative`}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-green-400/15 to-teal-500/20" />
      <div className={`absolute inset-0 ${
        isPoetry ? 'bg-poetry-background/80' : 'bg-white/70'
      } backdrop-blur-md`} />
      
      {/* Content */}
      <nav className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold">
            AM
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-800/5 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={linkClass}
                >
                  {link.label}
                  <motion.span
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${
                      isPoetry ? 'bg-white' : 'bg-gray-800'
                    } transform origin-left scale-x-0 transition-transform group-hover:scale-x-100`}
                    initial={false}
                    animate={{ scaleX: location.pathname === link.to ? 1 : 0 }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="pt-4 pb-2 space-y-2">
                {links.map((link) => (
                  <motion.li
                    key={link.to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      className={`block py-2 px-4 rounded-lg transition-colors hover:bg-gray-800/5
                        ${location.pathname === link.to ? 
                        (isPoetry ? 'text-white bg-white/10' : 'text-gray-900 bg-gray-800/5') : 
                        (isPoetry ? 'text-white' : 'text-gray-700')}`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;

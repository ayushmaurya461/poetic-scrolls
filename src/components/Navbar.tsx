
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const isPoetry = location.pathname === '/poetry';

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/blog', label: 'Blog' },
    { to: '/poetry', label: 'Poetry' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isPoetry ? 'bg-poetry-background text-poetry-foreground' : 'bg-background/80 text-foreground'
      } backdrop-blur-lg`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold">
            AM
          </Link>
          <ul className="flex items-center space-x-8">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative py-2 group transition-colors hover:text-white
                    ${location.pathname === link.to ? 'text-white' : 'text-gray-400'}`}
                >
                  {link.label}
                  <motion.span
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${
                      isPoetry ? 'bg-poetry-foreground' : 'bg-white'
                    } transform origin-left scale-x-0 transition-transform group-hover:scale-x-100`}
                    initial={false}
                    animate={{ scaleX: location.pathname === link.to ? 1 : 0 }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;

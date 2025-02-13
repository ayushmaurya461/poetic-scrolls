import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { FileText, BookOpen, Briefcase, FolderKanban, Menu, X } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: '/admin/blog', label: 'Blog', icon: <FileText className="w-5 h-5" /> },
    { path: '/admin/poetry', label: 'Poetry', icon: <BookOpen className="w-5 h-5" /> },
    { path: '/admin/experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
    { path: '/admin/projects', label: 'Projects', icon: <FolderKanban className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <motion.aside 
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-card shadow-lg transform",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 transition-transform duration-300 ease-in-out z-30"
        )}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-40 md:hidden bg-background p-2 rounded-lg shadow-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Backdrop for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="md:pl-64 min-h-screen">
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

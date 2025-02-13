
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import Poetry from "./pages/Poetry";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import AdminLayout from "./components/layouts/AdminLayout";
import BlogManager from "./pages/admin/BlogManager";
import PoetryManager from "./pages/admin/PoetryManager";
import ExperienceManager from "./pages/admin/ExperienceManager";
import ProjectManager from "./pages/admin/ProjectManager";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><Index /></>} />
          <Route path="/projects" element={<><Navbar /><Projects /></>} />
          <Route path="/experience" element={<><Navbar /><Experience /></>} />
          <Route path="/blog" element={<><Navbar /><Blog /></>} />
          <Route path="/poetry" element={<><Navbar /><Poetry /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /></>} />
          
          {/* Protected Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route path="blog" element={<BlogManager />} />
            <Route path="poetry" element={<PoetryManager />} />
            <Route path="experience" element={<ExperienceManager />} />
            <Route path="projects" element={<ProjectManager />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

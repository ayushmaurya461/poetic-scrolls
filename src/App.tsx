
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import BlogDetail from "./pages/BlogDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Index /></>} />
        <Route path="/projects" element={<><Navbar /><Projects /></>} />
        <Route path="/experience" element={<><Navbar /><Experience /></>} />
        <Route path="/blog" element={<><Navbar /><Blog /></>} />
        <Route path="/blog/:id" element={<><Navbar /><BlogDetail /></>} />
        <Route path="/poetry" element={<><Navbar /><Poetry /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="blog" element={<BlogManager />} />
          <Route path="poetry" element={<PoetryManager />} />
          <Route path="experience" element={<ExperienceManager />} />
          <Route path="projects" element={<ProjectManager />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import Poetry from "./pages/Poetry";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

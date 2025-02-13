import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects.ts';

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 px-4 md:px-6">
        <div className="container mx-auto py-20">
          <h1 className="text-4xl font-display font-bold">Project not found</h1>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 md:px-6"
    >
      <div className="container mx-auto py-20">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-400/50 hover:border-gray-300/70 mb-8 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>

        {/* Project Title and Role */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.details.role} • {project.details.duration}</p>
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {project.details.images.map((image, index) => (
            <div key={index} className="relative aspect-video rounded-xl overflow-hidden">
              <img 
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Project Description */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">
            {project.details.longDescription}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Key Achievements</h2>
          <ul className="space-y-3">
            {project.details.achievements.map((achievement, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="text-2xl leading-none">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Responsibilities</h2>
          <ul className="space-y-3">
            {project.details.responsibilities.map((responsibility, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="text-2xl leading-none">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;

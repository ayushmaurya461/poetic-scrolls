import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
}

const ExperienceManager = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const experienceTypes = ['full-time', 'part-time', 'contract', 'internship'];

  const handleSave = () => {
    if (!selectedExperience?.company || !selectedExperience?.role) return;

    const newExperience = {
      id: selectedExperience?.id || Date.now().toString(),
      ...selectedExperience,
    };

    if (selectedExperience.id) {
      setExperiences(experiences.map(exp => 
        exp.id === selectedExperience.id ? newExperience : exp
      ));
    } else {
      setExperiences([...experiences, newExperience]);
    }

    setSelectedExperience(null);
    setIsEditing(false);
  };

  const handleDelete = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
    setSelectedExperience(null);
    setIsEditing(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Experience Manager</h1>
        <button
          onClick={() => {
            setSelectedExperience({
              id: '',
              company: '',
              role: '',
              startDate: '',
              endDate: '',
              description: '',
              technologies: [],
              location: '',
              type: 'full-time',
            });
            setIsEditing(true);
          }}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Add New Experience
        </button>
      </div>

      {isEditing ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value={selectedExperience?.company || ''}
              onChange={(e) =>
                setSelectedExperience(prev => ({
                  ...(prev as Experience),
                  company: e.target.value,
                }))
              }
              className="px-4 py-2 border rounded-lg"
              placeholder="Company Name"
            />
            <input
              type="text"
              value={selectedExperience?.role || ''}
              onChange={(e) =>
                setSelectedExperience(prev => ({
                  ...(prev as Experience),
                  role: e.target.value,
                }))
              }
              className="px-4 py-2 border rounded-lg"
              placeholder="Role"
            />
            <input
              type="text"
              value={selectedExperience?.location || ''}
              onChange={(e) =>
                setSelectedExperience(prev => ({
                  ...(prev as Experience),
                  location: e.target.value,
                }))
              }
              className="px-4 py-2 border rounded-lg"
              placeholder="Location"
            />
            <select
              value={selectedExperience?.type || 'full-time'}
              onChange={(e) =>
                setSelectedExperience(prev => ({
                  ...(prev as Experience),
                  type: e.target.value as Experience['type'],
                }))
              }
              className="px-4 py-2 border rounded-lg"
            >
              {experienceTypes.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
            <input
              type="date"
              value={selectedExperience?.startDate || ''}
              onChange={(e) =>
                setSelectedExperience(prev => ({
                  ...(prev as Experience),
                  startDate: e.target.value,
                }))
              }
              className="px-4 py-2 border rounded-lg"
            />
            <input
              type="date"
              value={selectedExperience?.endDate || ''}
              onChange={(e) =>
                setSelectedExperience(prev => ({
                  ...(prev as Experience),
                  endDate: e.target.value,
                }))
              }
              className="px-4 py-2 border rounded-lg"
            />
          </div>
          <textarea
            value={selectedExperience?.description || ''}
            onChange={(e) =>
              setSelectedExperience(prev => ({
                ...(prev as Experience),
                description: e.target.value,
              }))
            }
            className="w-full mb-4 px-4 py-2 border rounded-lg min-h-[200px]"
            placeholder="Description"
          />
          <input
            type="text"
            value={selectedExperience?.technologies?.join(', ') || ''}
            onChange={(e) =>
              setSelectedExperience(prev => ({
                ...(prev as Experience),
                technologies: e.target.value.split(',').map(tech => tech.trim()),
              }))
            }
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            placeholder="Technologies (comma-separated)"
          />
          <div className="mt-4 space-x-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Save
            </button>
            <button
              onClick={() => {
                setSelectedExperience(null);
                setIsEditing(false);
              }}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="space-y-6">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{experience.role}</h2>
                  <h3 className="text-lg text-gray-600">{experience.company}</h3>
                  <div className="text-sm text-gray-500">
                    {experience.location} • {experience.type}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(experience.startDate).toLocaleDateString()} - 
                    {experience.endDate 
                      ? new Date(experience.endDate).toLocaleDateString()
                      : 'Present'}
                  </div>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => {
                      setSelectedExperience(experience);
                      setIsEditing(true);
                    }}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(experience.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-gray-700 mb-4 whitespace-pre-wrap">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceManager;

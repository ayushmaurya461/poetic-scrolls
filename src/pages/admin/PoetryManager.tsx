import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Poetry {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

const PoetryManager = () => {
  const [poems, setPoems] = useState<Poetry[]>([]);
  const [selectedPoem, setSelectedPoem] = useState<Poetry | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (!selectedPoem?.title || !selectedPoem?.content) return;

    const newPoem = {
      id: selectedPoem?.id || Date.now().toString(),
      title: selectedPoem.title,
      content: selectedPoem.content,
      tags: selectedPoem.tags || [],
      createdAt: selectedPoem?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (selectedPoem.id) {
      setPoems(poems.map(poem => 
        poem.id === selectedPoem.id ? newPoem : poem
      ));
    } else {
      setPoems([...poems, newPoem]);
    }

    setSelectedPoem(null);
    setIsEditing(false);
  };

  const handleDelete = (id: string) => {
    setPoems(poems.filter(poem => poem.id !== id));
    setSelectedPoem(null);
    setIsEditing(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Poetry Manager</h1>
        <button
          onClick={() => {
            setSelectedPoem({
              id: '',
              title: '',
              content: '',
              tags: [],
              createdAt: '',
              updatedAt: '',
            });
            setIsEditing(true);
          }}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Create New Poem
        </button>
      </div>

      {isEditing ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <input
            type="text"
            value={selectedPoem?.title || ''}
            onChange={(e) =>
              setSelectedPoem(prev => ({
                ...(prev as Poetry),
                title: e.target.value,
              }))
            }
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            placeholder="Poem Title"
          />
          <textarea
            value={selectedPoem?.content || ''}
            onChange={(e) =>
              setSelectedPoem(prev => ({
                ...(prev as Poetry),
                content: e.target.value,
              }))
            }
            className="w-full mb-4 px-4 py-2 border rounded-lg min-h-[300px]"
            placeholder="Write your poem here..."
          />
          <input
            type="text"
            value={selectedPoem?.tags?.join(', ') || ''}
            onChange={(e) =>
              setSelectedPoem(prev => ({
                ...(prev as Poetry),
                tags: e.target.value.split(',').map(tag => tag.trim()),
              }))
            }
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            placeholder="Tags (comma-separated)"
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
                setSelectedPoem(null);
                setIsEditing(false);
              }}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {poems.map((poem) => (
            <motion.div
              key={poem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-bold mb-2">{poem.title}</h2>
              <div className="text-sm text-gray-500 mb-2">
                Last updated: {new Date(poem.updatedAt).toLocaleDateString()}
              </div>
              <div className="mb-4">
                {poem.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <pre className="whitespace-pre-wrap mb-4 font-poetry text-gray-700">
                {poem.content}
              </pre>
              <div className="space-x-4">
                <button
                  onClick={() => {
                    setSelectedPoem(poem);
                    setIsEditing(true);
                  }}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(poem.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PoetryManager;

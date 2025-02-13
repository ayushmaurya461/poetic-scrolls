import React, { useState } from 'react';
import { Editor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import { useEditor } from '@tiptap/react';
import { motion } from 'framer-motion';

interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const BlogManager = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Youtube.configure({
        controls: true,
      }),
    ],
    content: selectedBlog?.content || '',
  });

  const MenuBar = () => {
    if (!editor) return null;

    const addImage = () => {
      const url = window.prompt('Enter image URL');
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    };

    const addYoutubeVideo = () => {
      const url = window.prompt('Enter YouTube video URL');
      if (url) {
        editor.chain().focus().setYoutubeVideo({ src: url }).run();
      }
    };

    return (
      <div className="border-b border-gray-200 p-4 space-x-2 flex flex-wrap gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('bold') ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('italic') ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('heading') ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('bulletList') ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          Bullet List
        </button>
        <button
          onClick={addImage}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          Add Image
        </button>
        <button
          onClick={addYoutubeVideo}
          className="px-3 py-1 rounded bg-red-500 text-white"
        >
          Add YouTube Video
        </button>
      </div>
    );
  };

  const handleSave = () => {
    if (!editor) return;
    
    const newBlog = {
      id: selectedBlog?.id || Date.now().toString(),
      title: selectedBlog?.title || 'New Blog',
      content: editor.getHTML(),
      createdAt: selectedBlog?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (selectedBlog) {
      setBlogs(blogs.map(blog => 
        blog.id === selectedBlog.id ? newBlog : blog
      ));
    } else {
      setBlogs([...blogs, newBlog]);
    }

    setSelectedBlog(null);
    setIsEditing(false);
  };

  const handleDelete = (id: string) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
    setSelectedBlog(null);
    setIsEditing(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Blog Manager</h1>
        <button
          onClick={() => {
            setSelectedBlog(null);
            setIsEditing(true);
          }}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Create New Blog
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
            value={selectedBlog?.title || ''}
            onChange={(e) =>
              setSelectedBlog(prev => ({
                ...(prev || {
                  id: Date.now().toString(),
                  content: '',
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString(),
                }),
                title: e.target.value,
              }))
            }
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            placeholder="Blog Title"
          />
          <MenuBar />
          <div className="min-h-[400px] border rounded-lg p-4">
            <EditorContent editor={editor} />
          </div>
          <div className="mt-4 space-x-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Save
            </button>
            <button
              onClick={() => {
                setSelectedBlog(null);
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
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <div className="text-sm text-gray-500 mb-4">
                Last updated: {new Date(blog.updatedAt).toLocaleDateString()}
              </div>
              <div className="space-x-4">
                <button
                  onClick={() => {
                    setSelectedBlog(blog);
                    setIsEditing(true);
                  }}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
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

export default BlogManager;

import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "The Evolution of Frontend Development",
    content: `Frontend development has come a long way from the days of simple HTML and CSS. Today, we're working with complex frameworks, state management solutions, and build tools that make our applications more powerful than ever.

In this blog post, we'll explore the journey of frontend development and where it's headed. From the rise of JavaScript frameworks to the emergence of Web Components and the future of web development.

Key Topics:
- The early days of web development
- The rise of JavaScript frameworks
- Modern build tools and their impact
- Future trends in frontend development

Stay tuned for more updates on this fascinating journey through the world of frontend development.`,
    date: "2024-02-01",
    author: "Ayush Maurya",
    tags: ["Frontend", "Web Development", "JavaScript"]
  },
  {
    id: 2,
    title: "Building Scalable Angular Applications",
    content: `Angular has established itself as one of the most robust frameworks for building enterprise-scale applications. In this comprehensive guide, we'll dive deep into the best practices for building scalable Angular applications.

We'll cover:
1. Project Structure
2. State Management
3. Performance Optimization
4. Testing Strategies
5. Deployment Considerations

Whether you're just starting with Angular or looking to improve your existing applications, this guide will provide valuable insights into building maintainable and scalable applications.`,
    date: "2024-01-15",
    author: "Ayush Maurya",
    tags: ["Angular", "TypeScript", "Web Development"]
  }
];

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>
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
      <div className="container mx-auto py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/blog')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Button>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{blog.title}</h1>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-8">
            <span>{blog.author}</span>
            <span>•</span>
            <span>{new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map(tag => (
                <span 
                  key={tag}
                  className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="whitespace-pre-wrap">
            {blog.content}
          </div>
        </article>
      </div>
    </motion.div>
  );
}

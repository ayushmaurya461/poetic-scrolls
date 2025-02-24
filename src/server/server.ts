
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import { Blog } from './models/Blog';
import { authMiddleware, AuthRequest } from './middleware/auth';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Public routes
app.get('/api/blogs', async (_req: Request, res: Response) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/api/blogs/:id', async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Protected routes
app.post('/api/blogs', authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const { title, content } = req.body;
    const newBlog = new Blog({
      title,
      content,
    });
    const blog = await newBlog.save();
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/api/blogs/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const { title, content } = req.body;
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    
    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.delete('/api/blogs/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    await blog.deleteOne();
    res.json({ message: 'Blog removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

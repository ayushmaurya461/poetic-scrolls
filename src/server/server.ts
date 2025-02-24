
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { connectDB } from './config/db';
import { Blog } from './models/Blog';
import { User } from './models/User';
import { authMiddleware, AuthRequest } from './middleware/auth';

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Auth routes
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Initialize admin user
const initializeAdmin = async () => {
  try {
    const admin = await User.findOne({ email: 'admin@example.com' });
    if (!admin) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await User.create({
        email: 'admin@example.com',
        password: hashedPassword,
      });
      console.log('Admin user created');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
};

initializeAdmin();

// Blog routes
app.get('/api/blogs', async (_req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/api/blogs', authMiddleware, async (req: AuthRequest, res) => {
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

app.put('/api/blogs/:id', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const { title, content } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, updatedAt: new Date() },
      { new: true }
    );
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.delete('/api/blogs/:id', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ message: 'Blog removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

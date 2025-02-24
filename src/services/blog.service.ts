
const API_URL = 'http://localhost:5000/api';

export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export const getBlogPosts = async () => {
  const response = await fetch(`${API_URL}/blogs`);
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return await response.json();
};

export const createBlogPost = async (post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) => {
  const response = await fetch(`${API_URL}/blogs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(post),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create blog post');
  }
  
  return await response.json();
};

export const updateBlogPost = async (id: string, post: Partial<BlogPost>) => {
  const response = await fetch(`${API_URL}/blogs/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(post),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update blog post');
  }
  
  return await response.json();
};

export const deleteBlogPost = async (id: string) => {
  const response = await fetch(`${API_URL}/blogs/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete blog post');
  }
};

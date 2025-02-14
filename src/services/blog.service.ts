
import { supabase } from '@/lib/supabase';

export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  created_at?: string;
  updated_at?: string;
}

export const getBlogPosts = async () => {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const createBlogPost = async (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('blogs')
    .insert([{ 
      ...post, 
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateBlogPost = async (id: string, post: Partial<BlogPost>) => {
  const { data, error } = await supabase
    .from('blogs')
    .update({ 
      ...post,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteBlogPost = async (id: string) => {
  const { error } = await supabase
    .from('blogs')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

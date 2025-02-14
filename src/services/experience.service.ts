
import { supabase } from '@/lib/supabase';

export interface Experience {
  id?: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  details: {
    achievements: string[];
    responsibilities: string[];
  };
  created_at?: string;
  updated_at?: string;
}

export const getExperiences = async () => {
  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const createExperience = async (experience: Omit<Experience, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('experiences')
    .insert([{ 
      ...experience,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateExperience = async (id: string, experience: Partial<Experience>) => {
  const { data, error } = await supabase
    .from('experiences')
    .update({ 
      ...experience,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteExperience = async (id: string) => {
  const { error } = await supabase
    .from('experiences')
    .delete()
    .eq('id', id);

  if (error) throw error;
};


import { supabase } from '@/lib/supabase';

export interface Poem {
  id?: string;
  title: string;
  content: string;
  story?: string;
  likes: number;
  comments: number;
  created_at?: string;
  updated_at?: string;
}

export const getPoems = async () => {
  const { data, error } = await supabase
    .from('poems')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const createPoem = async (poem: Omit<Poem, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('poems')
    .insert([{ 
      ...poem,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updatePoem = async (id: string, poem: Partial<Poem>) => {
  const { data, error } = await supabase
    .from('poems')
    .update({ 
      ...poem,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deletePoem = async (id: string) => {
  const { error } = await supabase
    .from('poems')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

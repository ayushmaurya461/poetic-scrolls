
import { supabase } from '@/lib/supabase';

const ADMIN_EMAIL = "itsayush.ayush@gmail.com";

export const sendLoginLink = async () => {
  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: ADMIN_EMAIL,
    });
    
    if (error) throw error;
    return true;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    throw error;
  }
};

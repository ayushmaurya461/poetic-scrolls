
import { 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  User
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

export const signIn = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    throw error;
  }
};

export const signOut = () => firebaseSignOut(auth);

export const getCurrentUser = (): User | null => auth.currentUser;

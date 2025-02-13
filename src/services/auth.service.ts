
import { 
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut as firebaseSignOut,
  User
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

const ADMIN_EMAIL = "itsayush.ayush@gmail.com"; // Replace with your email

export const sendLoginLink = async () => {
  const actionCodeSettings = {
    url: window.location.href,
    handleCodeInApp: true
  };

  try {
    await sendSignInLinkToEmail(auth, ADMIN_EMAIL, actionCodeSettings);
    // Save the email for confirmation
    window.localStorage.setItem('emailForSignIn', ADMIN_EMAIL);
    return true;
  } catch (error) {
    throw error;
  }
};

export const completeSignIn = async () => {
  try {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        throw new Error("Email not found");
      }
      
      const result = await signInWithEmailLink(auth, email, window.location.href);
      window.localStorage.removeItem('emailForSignIn');
      return result.user;
    }
  } catch (error) {
    throw error;
  }
};

export const signOut = () => firebaseSignOut(auth);

export const getCurrentUser = (): User | null => auth.currentUser;

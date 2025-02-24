
import {
  collection,
  addDoc,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

const COLLECTION_NAME = 'messages';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export const submitContactForm = async (message: Omit<ContactMessage, 'createdAt'>) => {
  const messageWithTimestamp = {
    ...message,
    createdAt: new Date().toISOString()
  };
  return await addDoc(collection(db, COLLECTION_NAME), messageWithTimestamp);
};


import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

const COLLECTION_NAME = 'experiences';

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
  createdAt: string;
  updatedAt: string;
}

export const getExperiences = async () => {
  const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Experience[];
};

export const createExperience = async (experience: Omit<Experience, 'id'>) => {
  return await addDoc(collection(db, COLLECTION_NAME), experience);
};

export const updateExperience = async (id: string, experience: Partial<Experience>) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  return await updateDoc(docRef, experience);
};

export const deleteExperience = async (id: string) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  return await deleteDoc(docRef);
};

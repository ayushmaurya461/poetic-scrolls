
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

const COLLECTION_NAME = 'poems';

export interface Poem {
  id?: string;
  title: string;
  content: string;
  story?: string;
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}

export const getPoems = async () => {
  const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Poem[];
};

export const createPoem = async (poem: Omit<Poem, 'id'>) => {
  return await addDoc(collection(db, COLLECTION_NAME), poem);
};

export const updatePoem = async (id: string, poem: Partial<Poem>) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  return await updateDoc(docRef, poem);
};

export const deletePoem = async (id: string) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  return await deleteDoc(docRef);
};

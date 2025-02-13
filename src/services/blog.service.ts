
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

const COLLECTION_NAME = 'blogs';

export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export const getBlogPosts = async () => {
  const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as BlogPost[];
};

export const createBlogPost = async (post: Omit<BlogPost, 'id'>) => {
  return await addDoc(collection(db, COLLECTION_NAME), post);
};

export const updateBlogPost = async (id: string, post: Partial<BlogPost>) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  return await updateDoc(docRef, post);
};

export const deleteBlogPost = async (id: string) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  return await deleteDoc(docRef);
};


export interface Poem {
  id?: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export const getPoems = async () => {
  const response = await fetch('http://localhost:5000/api/poems');
  if (!response.ok) {
    throw new Error('Failed to fetch poems');
  }
  return await response.json();
};

export const createPoem = async (poem: Omit<Poem, 'id' | 'createdAt' | 'updatedAt'>) => {
  const response = await fetch('http://localhost:5000/api/poems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(poem),
  });

  if (!response.ok) {
    throw new Error('Failed to create poem');
  }

  return await response.json();
};

export const updatePoem = async (id: string, poem: Partial<Poem>) => {
  const response = await fetch(`http://localhost:5000/api/poems/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(poem),
  });

  if (!response.ok) {
    throw new Error('Failed to update poem');
  }

  return await response.json();
};

export const deletePoem = async (id: string) => {
  const response = await fetch(`http://localhost:5000/api/poems/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete poem');
  }
};

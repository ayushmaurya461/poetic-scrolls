
const API_URL = 'http://localhost:5000/api';

export interface Experience {
  id?: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

export const getExperiences = async () => {
  const response = await fetch(`${API_URL}/experiences`);
  if (!response.ok) {
    throw new Error('Failed to fetch experiences');
  }
  return await response.json();
};

export const createExperience = async (experience: Omit<Experience, 'id'>) => {
  const response = await fetch(`${API_URL}/experiences`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(experience),
  });

  if (!response.ok) {
    throw new Error('Failed to create experience');
  }

  return await response.json();
};

export const updateExperience = async (id: string, experience: Partial<Experience>) => {
  const response = await fetch(`${API_URL}/experiences/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(experience),
  });

  if (!response.ok) {
    throw new Error('Failed to update experience');
  }

  return await response.json();
};

export const deleteExperience = async (id: string) => {
  const response = await fetch(`${API_URL}/experiences/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete experience');
  }
};

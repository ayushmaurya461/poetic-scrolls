
const API_URL = 'http://localhost:5000/api';

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  createdAt?: string;
}

export const sendContactMessage = async (message: Omit<ContactMessage, 'id' | 'createdAt'>) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return await response.json();
};

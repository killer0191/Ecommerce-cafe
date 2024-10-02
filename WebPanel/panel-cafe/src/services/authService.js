// src/services/authService.js
import { UserModel } from '../models/UserModel';

export const loginUser = async ({ email, password }) => {
  const response = await fetch('https://api.example.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();
  return new UserModel(data);  // Retorna una instancia del modelo de usuario
};

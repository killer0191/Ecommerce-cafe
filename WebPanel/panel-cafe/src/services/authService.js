// src/services/authService.js
import { API_BASE_URL } from '../config/apiConfig'; // Importa la base URL desde la configuración
import { UserModel } from '../models/UserModel';

export const loginUser = async ({ email, password }) => {
  let correo = email;
  console.log(JSON.stringify({ correo, password }));
  const response = await fetch(`${API_BASE_URL}/Administrador/Login`, { // Usa la base URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ correo, password }),
  });

  console.log(response);
  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();
  console.log("bien");
  return data; // Retorna la respuesta o el UserModel, según tu preferencia
};

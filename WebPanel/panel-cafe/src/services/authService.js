// src/services/authService.js
import { API_BASE_URL } from '../config/apiConfig'; // Importa la base URL desde la configuración
import Cookies from 'js-cookie';

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

  let data = await response.json();
  if(data.idAdministrador>0){
    console.log(data);
    Cookies.set('auth_token', JSON.stringify(data), { expires: 7 });
  }else{
    data = null;
  }
  return data;
};

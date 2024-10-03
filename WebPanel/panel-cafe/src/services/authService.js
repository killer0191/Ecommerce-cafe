// src/services/authService.js
import { API_BASE_URL } from '../config/apiConfig'; // Importa la base URL desde la configuración
import Cookies from 'js-cookie';
import getDataCookie from './cookieService';
import { useNavigate } from 'react-router-dom';

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

export const logoutUser = async () => {
  //const navigate = useNavigate(); // Hook para navegar
  let data = getDataCookie();
  let response = true;
  
  /*const response = await fetch(`${API_BASE_URL}/Administrador/Logout/${data.idAdministrador}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });*/

  if (response === true) {
    Cookies.remove('auth_token'); // Borra la cookie

    // Redirige al usuario a la página de login
    //navigate('/login');
  }
  return response;
};
